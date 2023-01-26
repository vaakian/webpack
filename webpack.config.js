// @ts-check

const webpack = require('webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.ts',
  plugins: [
    // auto add React import
    new webpack.ProvidePlugin({
      React: 'react',
    })
  ],

  // suffix auto resolve
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  // my ts loader
  module: {
    rules: [
      {
        test: /\.tsx?/i,
        use: ['./loaders/tsLoader.js'],
      },
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
