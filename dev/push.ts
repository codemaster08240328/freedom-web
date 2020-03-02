#!/usr/bin/env ts-node

import { resolve }  from 'path';
import { writeFileSync as writeFile, readFileSync as readFile } from 'fs';
import { safeDump as yamlDump, safeLoad as yamlLoad } from 'js-yaml';
import { compile as compileTemplate } from 'handlebars';
import { echo, which, exec, test } from 'shelljs';
import { spawn } from 'child-process-promise';
import { ECR } from 'aws-sdk';

import main from './lib/min-main';

const REGION = 'eu-west-1',
  DEPLOY_ENV = process.env.NODE_ENV || 'staging',
  REPO_PREFIX = 'apps',
  ROOT = resolve(`${__dirname}/..`),
  DIST = `${ROOT}/dist`;

main(async ({ abort }) => {
  const missing = ['docker'].filter(c => !which(c));
  if (missing.length > 0) {
    echo(`Required binaries missing: '${missing.join("','")}'.`);
    abort();
  }

  if (!test('-e', `${DIST}/deploy/_metadata.yml`)) {
    echo('No build available to push.');
    abort();
  }

  const META = yamlLoad(
    readFile(`${DIST}/deploy/_metadata.yml`, { encoding: 'utf-8' })
  );

  if (DEPLOY_ENV === 'production' && META.build.revision.endsWith('-dirty')) {
    echo('Cannot deploy dirty revision to production. Commit first.');
    abort();
  }
  const repoName = `${REPO_PREFIX}/${META.build.image}`;

  const ecr = new ECR({
    region: REGION
  });

  // Get auth token from ECR and login with docker
  console.log('Logging in to ECR...');
  const { authorizationData } = await ecr.getAuthorizationToken().promise();
  if (!(authorizationData && authorizationData[0])) {
    console.log('Couldnt get authdata');
    return abort();
  }

  const { authorizationToken, proxyEndpoint } = authorizationData[0];
  if (!(authorizationToken && proxyEndpoint)) {
    console.log('dfds');
    return abort();
  }
  const [username, password] = Buffer.from(authorizationToken, 'base64')
    .toString()
    .split(':');

  const dockerLogin: any = spawn(
    'docker',
    ['login', '--username', username, '--password-stdin', proxyEndpoint],
    { stdio: ['pipe', 'inherit', 'inherit'] }
  );
  dockerLogin.childProcess.stdin.write(password);
  dockerLogin.childProcess.stdin.end();

  await dockerLogin;

  // Create ECR repository
  const { repositories } = await ecr.describeRepositories().promise();
  if (!repositories) {
    return abort();
  }
  let repository: ECR.Repository | undefined = repositories.filter(r => r.repositoryName === repoName)[0];

  if (repository == null) {
    console.log(`Creating ECR repository '${repoName}'...`);
    const response = await ecr
      .createRepository({ repositoryName: repoName })
      .promise();
    repository = response.repository;
  }
  if (repository == null) {
    console.log('not created');
    return abort();
  }

  const remoteName = `${repository.repositoryUri}:${META.build.tag}`;

  // Template kubernetes YAML
  echo('Creating deployment config...');
  const kConfigRaw = yamlLoad(
    readFile(`${ROOT}/deploy/config.yml`, { encoding: 'utf-8' })
  );
  const kConfig = Object.assign(
    kConfigRaw['default'] || {},
    kConfigRaw[DEPLOY_ENV],
    {
      IMAGE_URI: remoteName
    }
  );

  const deployTemplate = compileTemplate(
    readFile(`${ROOT}/deploy/deploy.yml.tmpl`, { encoding: 'utf-8' })
  );
  const deployYaml = deployTemplate(kConfig);

  writeFile(`${DIST}/deploy/deploy.yml`, deployYaml);

  // Push image to ECR
  echo('Pushing image to ECR...');
  execOrFail(
    `docker tag '${META.build.image}:${META.build.tag}' '${remoteName}'`
  );
  execOrFail(`docker push '${remoteName}'`);

  // TODO: Upload sourcemaps to Rollbar

  writeFile(
    `${DIST}/deploy/_metadata.yml`,
    yamlDump(
      Object.assign({}, META, {
        push: {
          env: DEPLOY_ENV,
          imageUri: remoteName,
          completed: new Date().toISOString()
        }
      })
    )
  );

  echo('Done.');
});

function execOrFail(...args) {
  const r = exec(...args);
  if (r.code != 0) {
    throw new Error(`Error executing '${args.join(' ')}'.`);
  }
  return r;
}
