#!/usr/bin/env ts-node
import { resolve as resolvePath } from 'path';
import { writeFileSync as writeFile } from 'fs';
import { safeDump as yamlDump } from 'js-yaml';
import { echo, rm, mkdir, which, exec, mv, cp } from 'shelljs';
import * as copydir from 'copy-dir';
import path = require('path');
import main from './lib/min-main';
import CONFIG from '../src/config';

const
  IMAGE_NAME = CONFIG.APP_NAME,
  ROOT = resolvePath(`${__dirname}/..`),
  DIST = `${ROOT}/dist`;


main(async ({ abort }) => {
  const missing = ['docker', 'git'].filter(c => !which(c));
  if (missing.length > 0) {
    echo(`Required binaries missing: '${missing.join("','")}'.`);
    abort();
  }

  echo('Cleaning...');
  rm('-rf', DIST);
  mkdir('-p', `${DIST}/build`, `${DIST}/deploy`);

  let gitHash = exec('git rev-parse HEAD', { silent: true }).toString().trim();
  let tag = gitHash.slice(0, 7);

  const dirty = exec('git diff-index --quiet HEAD --', { silent: true }).code > 0;
  if (dirty) {
    gitHash = `${gitHash}-dirty`;
    tag = `${tag}-dirty`;
  }

  echo(`Building revision '${tag}'...`);

  cp('./package.json', './yarn.lock', './next.config.js', './.babelrc',`${DIST}`);

  echo('Linting...');
  execOrFail(`yarn lint`);

  echo('Testing...');
  execOrFail(`yarn test`);

  echo('Compiling...');
  execOrFail(`yarn build`);

  copydir.sync(`${ROOT}/static/`, `${DIST}/static`);
  copydir.sync(`${ROOT}/.next/`, `${DIST}/.next`);

  copydir.sync(`${DIST}/`, `${DIST}/deploy`, function(stat, filepath, filename) {
    if (stat === 'file' && path.extname(filepath) in ['.js', '.jsx']) {
      return false;
    }
    if (stat === 'directory' && filename === 'build') {
      return false;
    }
    return !(stat === 'directory' && filename === 'deploy');

  }, function() {
    console.log('ok');
  });
  copydir.sync(`${DIST}/`, `${DIST}/build`, function(stat, filepath, filename) {
    if (stat === 'file' && path.extname(filepath) === '.map') {
      return false;
    }
    if (stat === 'directory' && filename === 'build') {
      return false;
    }
    return !(stat === 'directory' && filename === 'deploy');

  }, function() {
    console.log('ok');
  });
  rm('-rf', `${DIST}/*.js`);
  rm('-rf', `${DIST}/*.map`);
  rm('-rf', `${DIST}/!(deploy|build)`);
  echo('Building docker image...');
  execOrFail(`docker build -f ./deploy/Dockerfile '${DIST}/build' -t '${IMAGE_NAME}:${tag}' --build-arg CODE_REVISION='${gitHash}'`);
  execOrFail(`docker tag '${IMAGE_NAME}:${tag}' '${IMAGE_NAME}:latest'`);

  writeFile(`${DIST}/deploy/_metadata.yml`, yamlDump({
    build: {
      revision: gitHash,
      image: IMAGE_NAME,
      tag: tag,
      completed: (new Date()).toISOString()
    }
  }));

  echo('Done');
});

function execOrFail(...args) {
  const r = exec(...args);
  if (r.code != 0) {
    throw new Error(`Error executing '${args.join(' ')}'.`);
  }
  return r;
}
