#!/usr/bin/env node

const script = process.argv[2]

switch (script) {
  case 'build':
  case 'lint':
  case 'start':
  case 'jest':
    require('./' + script)
    break
  default:
    console.error('vscripts error: Unknown script: ', script)
}
