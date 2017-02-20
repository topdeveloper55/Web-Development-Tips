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
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(woff|otf|ttf|svg)$/,
        loader: "file?name=../fonts/[name].[ext]"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file?name=../img/[hash].[ext]"
      },
      {
        test: /\.mp4$/,
        loader: "file?name=../videos/[name].[ext]"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
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
};
