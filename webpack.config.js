module.exports = {
  entry: './client',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.json/,
      loader: 'json'
    }, {
      test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
      loader: 'url?prefix=font/&limit=10000'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
