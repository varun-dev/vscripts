#!/usr/bin/env node

const script = process.argv[2]

switch (script) {
  case 'build':
  case 'lint':
    require('./' + script)
    break
  default:
    console.error('vscripts error: Unknown script: ', script)
}