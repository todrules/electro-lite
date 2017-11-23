#!/usr/bin/env node

'use strict';
const gutil = require('gulp-util');
const prettyTime = require('pretty-hrtime');
const chalk = require('chalk');


// Set env var for ORIGINAL cwd
// before anything touches it
process.env.INIT_CWD = process.cwd();


// Exit with 0 or 1
const failed = false;
process.once('exit', (code) => {
  if (code === 0 && failed) {
    process.exit(1);
  }
});
