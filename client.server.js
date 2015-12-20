var path = require('path');
var webpack = require('webpack');
var config = require("./webpack.config.js");
var compiler = webpack(config);
var WebpackDevServer = require('webpack-dev-server');

config.plugins.push(new webpack.HotModuleReplacementPlugin())

var server = new WebpackDevServer(compiler, {
  contentBase: './build/client',
  hot: true,
  inline: true,
  watch: true,
  stats: {
    colors: true,
  },
  publicPath: '/'
});

server.listen(4000, 'localhost', function (error) {
  if (error) {
    console.log(error);
  }
  console.log('Server running at localhost:4000');
});
