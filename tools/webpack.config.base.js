const config = require('./config.js');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    // the output bundle
    filename: '[name].bundle.js',

    path: config.outputPath,

    // necessary for HMR to know where to load the hot update chunks
    publicPath: config.publicPath,

    sourceMapFilename: '[name].map'

  },
  target: 'web',
  context: path.resolve(__dirname, '../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules:true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  precss,
                  autoprefixer
                ];
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      // chunksSortMode: 'dependency',
      filename: 'index.html'
    })
  ]

};