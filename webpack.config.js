import path from 'path';
import webpack from 'webpack';

const { NODE_PATH: srcPath } = process.env;

export default {
  devtool: 'source-map',
  resolve: {
    root: path.resolve(srcPath),
    extensions: ['', '.js']
  },
  entry: [
    'webpack-hot-middleware/client',
    `${srcPath}/index.js`
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', }
    ]
  }
}
