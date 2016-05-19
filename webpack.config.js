import path from 'path';
import webpack from 'webpack';

const { NODE_PATH: srcPath } = process.env;

export default {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    `${srcPath}/index.js`
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', }
    ]
  }
}
