const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: 'public/index.html',
    }),
  ],
  serve: {},
}