const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const config = require('./config');

module.exports = webpackMerge(baseWebpackConfig, {
  entry: [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // the entry point of our app
    './index.js'
  ],
  devtool: 'inline-source-map',

  devServer: {
    // enable HMR on the server
    hot: true,

    // match the output path
    contentBase: config.outputPath,

    // match the output `publicPath`
    publicPath: config.publicPath,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin()
  ]
});