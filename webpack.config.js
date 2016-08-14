var webpack = require('webpack');
var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var clientJsEntry = path.join(srcPath, 'js', 'index.js');
var babelQuery = {};

module.exports = {
  context: srcPath,
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer with configuration for host/port
    'webpack/hot/only-dev-server', // prevents reload on syntax errors
    clientJsEntry // app entry point
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src/js']
  },
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify(babelQuery)],
        include: srcPath
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
        include: srcPath
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'src')]
  },
  devServer: {
    historyApiFallback: true
  }
};