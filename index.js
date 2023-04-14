#! /usr/bin/env node
// ==========================================================
const { Command } = require("commander");
const map = require("./src/map/index.js");
const docs = require("./src/docs/index.js");
const search = require("./src/search/index.js");
const version = require("./package.json").version;
// ==========================================================

// new Command()用于创建一个新的命令对象
const program = new Command();
program
  // .argument("[type]", "search content")
  .version(version, "-v, --version")
  .argument("[content]", "Search something")
  .action((content) => {
    content && search(content);
  });
// option用于添加参数

program
  .option("-s, --search <content>", "Search something", search)
  .option("-d, --doc", "open docs List", docs)
  .option("-m, --map", "open map of Baidu", map);

// parse()方法会解析命令行参数，并将其存储在Command的args属性中
program.parse(process.argv);
// opts()用于获取命令行参数
const options = program.opts();
if (!process.argv.slice(2).length) {
  program.help();
}
