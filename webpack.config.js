const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname,'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'src','static','js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: __dirname,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },
      /*{
        test: /.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },*/
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(woff|otf)$/,
        loader: "url-loader?name=./fonts/[name].[ext]"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file?name=[hash].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false},
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
}
