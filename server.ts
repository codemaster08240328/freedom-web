import Koa from 'koa';
import next from 'next';
import routes from './routes';
import config from './src/config';

const dev = config.ENVIRONMENT === 'development';

const app = next({ dev });
const handler = routes.getRequestHandler(app);
const server = new Koa();
app.prepare().then(() => {
  server
    .use((ctx: Koa.Context) => {
      ctx.respond = false;
      ctx.res.statusCode = 200; // because koa defaults to 404
      handler(ctx.req, ctx.res);
    })
    .listen(3000, () => console.log('Server listening on port 3000'));
});
