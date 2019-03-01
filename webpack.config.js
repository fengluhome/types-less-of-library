/**
 * Created by lu on 2016/12/5.
 */
const path = require('path');
const webpack = require('webpack');
const version = require('./package.json').version;
let libraryName = 'TDUI';
const option = {
  mode: 'none',
  target: 'webworker',
  entry: {
    TDUI: './src/main.js',
  },
  output: {
    path: path.join(__dirname, './dist'),
    libraryTarget: 'umd',
    library: libraryName,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  externals: {
    BMap: {}
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version)
    }),
  ]
};

module.exports = option;