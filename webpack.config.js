var webpack = require('webpack');

module.exports = {
  context: __dirname + "/client",
  entry: {
    app: ['webpack/hot/dev-server', "./app.es6.js"],
    vendors: "./vendors.es6.js"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/build/client",
    publicPath:  __dirname + '/build/client'
  },

  module: {
    loaders: [
      {
        test: /\.es6\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            presets: ['es2015']
        }
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js"),
    new webpack.optimize.CommonsChunkPlugin("common", "common.js")
  ],
  devtool: "cheap-source-map"
}
