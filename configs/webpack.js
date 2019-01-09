const paths = require('.//paths')
const loaders = require('./loaders')

module.exports = {
  entry: [ paths.entry ],
  devServer: {
    port:9000,
    contentBase: paths.contentBase
  },
  output: {
    path: paths.output,
    filename: 'bundle.js',
  },
  module: loaders.module,
  plugins: loaders.plugins,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  resolveLoader: {
    modules: [ 'node_modules', 'node_modules/vslint/node_modules']
  },
  devtool: 'source-map',
  stats: 'errors-only'
}
