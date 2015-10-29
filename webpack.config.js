var webpack = require('webpack');
var cleanBuild = require('clean-webpack-plugin');

module.exports = {
  node: {
    fs: "empty",
    fsevents: "empty"
  },
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    filename: 'index.min.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    // Cleans the Dist folder after every build.
    new cleanBuild(['dist']),
    // Minification (Utilized in Production)
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
