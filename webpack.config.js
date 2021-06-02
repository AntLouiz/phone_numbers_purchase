var path = require('path')
var webpack = require('webpack')
var bundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: path.join(__dirname, 'frontend/src/js/index.js'),
  output: {
    path: path.join(__dirname, 'frontend/src/dist'),
    filename: '[name]-bundle.js'
  },
  plugins: [
    new bundleTracker({
        path: '__dirname',
        filename: 'webpack-stats.json'
      }),
      new webpack.DefinePlugin({
        'API_URL': JSON.stringify(process.env.API_URL)
      })
    ],
  module: {
        rules: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ],
    }
  }
