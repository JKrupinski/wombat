#!/usr/bin/env node
const wombat = require('../index')
const task = process.argv.slice(2)[0] || 'build'

;(async () => {
  switch(task) {
    case 'dev':
      await wombat.dev()
      break
    case 'build':
      await wombat.build()
      break
    default:
      throw new Error('Unknown option. Only `dev` and `build` are supported.')
  }
})()
