const HtmlWebpackPlugin  = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const paths = require('./paths')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.src,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              require.resolve('@babel/plugin-proposal-class-properties')
            ],
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react')
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        include: paths.src,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  }
}
