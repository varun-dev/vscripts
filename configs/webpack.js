const paths = require('./paths')
const loaders = require('./loaders')
const devServer = require('./dev-server')

module.exports = {
  entry: [paths.entry],
  devServer: devServer,
  output: {
    path: paths.output,
    filename: 'bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },
  mode: 'development',
  module: loaders.module,
  plugins: loaders.plugins,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    modules: ['node_modules', `${paths.modulePath}/node_modules`]
  },
  devtool: 'source-map',
  stats: 'errors-only'
}
