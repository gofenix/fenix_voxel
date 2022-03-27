const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports =
{
  mode: 'production',
  entry: './js/start.js',
  output:
  {
    filename: 'bundle-prod.js',
    path: path.join(__dirname, '../dist'),
  },
  resolve:
  {
    modules: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
};
