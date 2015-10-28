
module.exports = {
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
  }
}
