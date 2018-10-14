#!/usr/bin/env node

const fs = require('fs')
const shell = require('shelljs')
const cla = require('command-line-args')

function getEslintCliPath() {
  let path = 'node_modules/eslint/bin/eslint.js'
  if (!fs.existsSync(path)) {
    const projectPath = 'node_modules/vslint/'
    path = projectPath + path
    if (!fs.existsSync(path)) {
      console.error('Cannot find path to eslint cli')
      process.exit(1)
    }
  }
  return path
}

function getConfigFile() {
  const configFilePath = '/vslint/config/.eslintrc.js'
  let path = `node_modules${configFilePath}`
  if (!fs.existsSync(path)) {
    path = `../${configFilePath}`
    if (!fs.existsSync(path)) {
      console.error('Cannot find eslint config file')
      process.exit(1)
    }
  }
  return path
}


const eslintCli = getEslintCliPath()
const configFile = getConfigFile()

const defaults = {
  src: 'src',
  config: configFile,
  color: true,
  fix: false,
}

const optionDefinitions = [
  {
    name: 'src', type: String, multipe: true, defaultOption: true,
  },
  { name: 'config', type: String },
  { name: 'color', type: Boolean },
  { name: 'fix', type: Boolean },
]

const options = Object.assign({}, defaults, cla(optionDefinitions))

const argsString = `${options.color ? ' --color' : ''
} --config ${options.config}${options.fix ? ' --fix' : ''} ${options.src}`

// console.log('configFile', configFile)
// console.log('eslintCli', eslintCli)
// console.log('argsString', argsString)

shell.exec(eslintCli + argsString)
