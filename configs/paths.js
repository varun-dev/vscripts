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

function getValidPath(paths) {
  const validPath = paths.find(fs.existsSync)
  if (validPath) return validPath
  console.error('Cannot find required file')
  process.exit(1)
}

module.exports = {
  lintCli: getValidPath(lintCli),
  lintConfig: getValidPath(lintConfig),
  webpackCli: getValidPath(webpackCli),
  webpackConfig: getValidPath(webpackConfig),
  entry: resolvePath('src/index.js'),
  contentBase: resolvePath('docs'),
  output: resolvePath('docs'),
  src: resolvePath('src')
}
