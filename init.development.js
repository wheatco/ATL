const nodemon = require('nodemon');
const webpack = require('webpack');
// BUILD CLIENT FILES
var compiler = webpack(require('./webpack.config.js'));
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
