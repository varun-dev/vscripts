#!/usr/bin/env node
const shell = require("shelljs")
const path = 'node_modules/vslint/'
const configFile = path + 'config/.eslintrc.js'
const eslint = 'node_modules/eslint/bin/eslint.js'
const options = ' --color --config ' + configFile
const folders = ' src'

shell.exec(eslint + options + folders)
