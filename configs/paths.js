const fs = require('fs')
const path = require('path')
const packageJson = require('../package')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);
const modulePath = `node_modules/${packageJson.name}`

// CLIs
const lintCli = ['node_modules/eslint/bin/eslint.js']
const webpackCli = ['node_modules/webpack/bin/webpack.js']
const devServerCli = ['node_modules/webpack-dev-server/bin/webpack-dev-server.js']
const jestCli = ['node_modules/jest/bin/jest.js']

// CONFIGs
const lintConfig = [`${modulePath}/configs/eslintrc.js`]
const webpackConfig = [`${modulePath}/configs/webpack.js`]
const jestConfig = [`${modulePath}/configs/jest.js`]

function getValidPath(paths) {
  const anotherPath = modulePath + '/' + paths[paths.length - 1]
  const validPath = paths.concat([anotherPath]).find(fs.existsSync)
  if (validPath) return validPath
  console.error('Cannot find required file')
  process.exit(1)
}

module.exports = {
  contentBase: resolvePath('docs'),
  devServerCli: getValidPath(devServerCli),
  entry: resolvePath('src/index.js'),
  jestCli: getValidPath(jestCli),
  jestConfig: getValidPath(jestConfig),
  lintCli: getValidPath(lintCli),
  lintConfig: getValidPath(lintConfig),
  modulePath: modulePath,
  output: resolvePath('docs'),
  src: resolvePath('src'),
  webpackCli: getValidPath(webpackCli),
  webpackConfig: getValidPath(webpackConfig)
}
