#!/usr/bin/env node

const shell = require('shelljs')
const cla = require('command-line-args')
const paths = require('../configs/paths')

const lintCli = paths.lintCli
const lintConfig = paths.lintConfig

const defaultOptions = {
  src: 'src',
  config: lintConfig,
  color: true,
  fix: false
}

const optionDefinitions = [
  { name: 'src', type: String, multiple: true },
  { name: 'config', type: String },
  { name: 'color', type: Boolean },
  { name: 'fix', type: Boolean },
]

const parsedOptions = cla(optionDefinitions, { argv: process.argv.splice(3) })

const options = Object.assign({}, defaultOptions, parsedOptions)

const argsString = `${options.color ? ' --color' : ''
} --config ${options.config}${options.fix ? ' --fix' : ''} ${options.src}`

const command = lintCli + argsString
shell.exec(command)
