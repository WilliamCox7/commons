var webpack = require('webpack');
var path = require('path');


module.exports = {

  devtool:'source-map',

  entry:[
    './client/index.js'
  ],

  output: {
    path: path.join(__dirname, '/public'),
    filename: "bundle.js",
    publicPath: '/public/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loaders: [ 'babel']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader'
      }
    ]

  },

  resolve: {
      extensions: ["", ".js", ".css"]
  }

}
