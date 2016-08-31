/* eslint-disable xo/no-process-exit */

const childProcess = require('child_process');
const nodemon = require('nodemon');
const webpack = require('webpack');

// BUILD CLIENT FILES

var compiler = webpack({
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
});

compiler.watch({
  aggregateTimeout: 300,
  poll: true
}, function (err, stats) {
  if (err) {
    console.log('Webpack build failed:', err);
  } else {
    console.log('Webpack build successful, completed in ' +
      String((stats.endTime - stats.startTime) / 1000) + ' seconds.');
    // console.log(stats.toString({colors: true, chunks: false}));
  }
});

// START BACKEND

nodemon({
  exec: 'node src/',
  ext: 'js json jsx',
  ignore: ['client/', 'public/']
});

// So everything shuts down on ^c
process.on('SIGINT', function () {
  process.exit();
});

nodemon.on('restart', function (files) {
  console.log('Change detected, restarting feathers! Files:', files.join(', '));
});