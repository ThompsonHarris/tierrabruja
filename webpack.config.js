const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();

const config = {
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        LOGGER: JSON.stringify(process.env.LOGGER),
        EMAIL: JSON.stringify(process.env.EMAIL),
        PASS: JSON.stringify(process.env.PASS),
        apiKey: JSON.stringify(process.env.apiKey),
        authDomain: JSON.stringify(process.env.authDomain),
        databaseURL: JSON.stringify(process.env.databaseURL),
        projectId: JSON.stringify(process.env.projectId),
        storageBucket: JSON.stringify(process.env.storageBucket),
        messagingSenderId: JSON.stringify(process.env.messagingSenderId),
        appId: JSON.stringify(process.env.appId),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
