#! /usr/bin/env node

const path = require('path')

require('dotenv').config({
  path: path.resolve(process.cwd(), '.env')
})

/*
|-------------------------------------------------------------------------------
| 启动 CLI
*/
require('../lib/index.js')
