var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
console.log(__dirname)
module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./client.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'transform-decorators-legacy',
            'transform-class-properties',
            'transform-es2015-spread',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: 'src'
  }
};