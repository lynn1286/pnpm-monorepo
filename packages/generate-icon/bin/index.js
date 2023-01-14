#! /usr/bin/env node

import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({
  path: path.resolve(process.cwd(), '.env')
})

/*
|-------------------------------------------------------------------------------
| 启动 CLI
*/
import '../lib/index.js'
