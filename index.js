#! /usr/bin/env node
// const c = require("child_process");
// c.exec(`start https://www.npmjs.com/package/${process.argv[2]}`);

const open = require("open");
open("https://www.npmjs.com/package/" + process.argv[2]);
