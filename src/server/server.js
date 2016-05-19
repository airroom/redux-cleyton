import Express from 'express';
import http from 'http';
import morgan from 'morgan';
import webpack from 'webpack';
import wpConfig from '../../webpack.config.js';

const compiler = webpack(wpConfig);

const app = new Express();
const server = new http.Server(app);

compiler.colors = true;

const { PORT: port, NODE_PATH: srcPath } = process.env;

app.use(morgan('dev'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: wpConfig.output.publicPath,
  compress: true,
  stats: { colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use('/static', Express.static(`${srcPath}/../static`));

server.listen(port, () => {
  const host = server.address().address;
  console.log(`♥ Spreading Cleytoness in http://${host}:${port} ♥`);
});
