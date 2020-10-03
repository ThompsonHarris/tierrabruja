const path = require('path');
const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'production',
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
  plugins: [new Dotenv()],
};

module.exports = config;
