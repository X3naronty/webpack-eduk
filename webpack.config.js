const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
    print: path.resolve(__dirname, 'src', 'print.js'),
  },  // the first vertex of the dependency graph(can be more than 1)
  mode: 'development',  // enforces webpack to use built-in optimizations for defined mode
  output: { // tells webpack where to emit the bundles
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single', 
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  module: {  // specifying loaders
    rules: [
      {},
    ],
  },
};