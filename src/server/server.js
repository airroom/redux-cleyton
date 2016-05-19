import Express from 'express';
import http from 'http';
import morgan from 'morgan';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.js';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Base from './Base.js';

const compiler = webpack(webpackConfig);

const app = new Express();
const server = new http.Server(app);

const { PORT: port, NODE_PATH: srcPath } = process.env;

app.use(morgan('dev'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  compress: true,
  hot: true,
  inline: true,
  stats: { colors: true }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/static', Express.static(`${srcPath}/../static`));

app.use('/', (req, res) =>
  res.send(`<!DOCTYPE html>\n${ReactDOM.renderToString(<Base />)}`)
);

server.listen(port, () => {
  const host = server.address().address;
  console.log(`♥ Spreading Cleytoness in http://${host}:${port} ♥`);
});
