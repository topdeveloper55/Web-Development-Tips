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
        test: /\.(woff|otf)$/g,
        loader: "url-loader?name=./fonts/[name].[ext]"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader?name=./images/[name].[ext]"
      }
    ]
  }
}
