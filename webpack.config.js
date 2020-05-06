var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app :'./src/main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
};

