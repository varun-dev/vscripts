const fs = require('fs')
const path = require('path')
const packageJson = require('../package')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);
const modulePath = `node_modules/${packageJson.name}`

const lintCli = [
  'node_modules/eslint/bin/eslint.js',
  `${modulePath}/node_modules/eslint/bin/eslint.js`
]

const lintConfig = [
  `${modulePath}/configs/eslintrc.js`
]

const webpackConfig = [
  `${modulePath}/configs/webpack.js`
]

const webpackCli = [
  'node_modules/webpack/bin/webpack.js',
  `${modulePath}/node_modules/webpack/bin/webpack.js`
]

const devServerCli = [
  'node_modules/webpack-dev-server/bin/webpack-dev-server.js',
  `${modulePath}/node_modules/webpack-dev-server/bin/webpack-dev-server.js`
]

function getValidPath(paths) {
  const validPath = paths.find(fs.existsSync)
  if (validPath) return validPath
  console.error('Cannot find required file')
  process.exit(1)
}

module.exports = {
  contentBase: resolvePath('docs'),
  devServerCli: getValidPath(devServerCli),
  entry: resolvePath('src/index.js'),
  lintCli: getValidPath(lintCli),
  lintConfig: getValidPath(lintConfig),
  modulePath: modulePath,
  output: resolvePath('docs'),
  src: resolvePath('src'),
  webpackCli: getValidPath(webpackCli),
  webpackConfig: getValidPath(webpackConfig)
}
