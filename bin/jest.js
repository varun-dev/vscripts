#!/usr/bin/env node

const shell = require('shelljs')
const paths = require('../configs/paths')

const cli = paths.jestCli
const config = paths.jestConfig
const command = cli + ' --config ' + config
shell.exec(command)
