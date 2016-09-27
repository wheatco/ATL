const webpack = require('webpack');
// BUILD CLIENT FILES
const compiler = webpack(require('./webpack.config.js'));
compiler.run(function(err, stats){});
// START BACKEND
process.env.NODE_ENV = "production";
require('./src');

