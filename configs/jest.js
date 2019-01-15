const paths = require('./paths')

module.exports = {
  rootDir: paths.src,
  testMatch: [ "**/__tests__/**/*.js?(x)", "**/?(*.)+(jest).js?(x)" ],
  verbose: true,
}
