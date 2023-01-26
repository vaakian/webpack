// @ts-check
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/main.tsx',
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    // auto add React import
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // suffix auto resolve
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },

  // my ts loader
  module: {
    rules: [
      {
        test: /\.tsx?/i,
        use: ['./loaders/tsLoader.js'],
      },
      {
        test: /\.css$/i,
        use: ['./loaders/styleLoader.js'],
      },
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
