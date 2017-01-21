module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "static/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.woff$/,
        loader: "file-loader"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader",
        options: {
          name: '[path][name].[hash].[ext]'
        }
      }
    ]
  }
}
