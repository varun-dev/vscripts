#!/usr/bin/env node

const shell = require('shelljs')
const paths = require('../configs/paths')

const cli = paths.webpackCli
const config = paths.webpackConfig
const command = cli + ' --config ' + config
shell.exec(command)
