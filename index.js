#! /usr/bin/env node
// ==========================================================
const open = require("open");
const { Command } = require("commander");
const inquirer = require("inquirer");
// ==========================================================

// new Command()用于创建一个新的命令对象
const program = new Command();
// program.option用于添加参数
program
  .option("-m, --map", "open map of Baidu")
  .option("-t, --translate", "Translate something")
  .option("-s, --search", "Search something")
  .option("-S, --search-key <key>", "Search something")
  .option("-p, --pizza-type <type>", "A test command");

// program.parse()方法会解析命令行参数，并将其存储在Command的args属性中
program.parse(process.argv);
// program.opts()用于获取命令行参数
const options = program.opts();

console.log("🚀🚀🚀 / options", options);

if (options.search) {
  search();
} else if (options.translate) {
  translate();
} else if (options.map) {
  open("https://map.baidu.com/search");
}

// 搜索
function search() {
  const engineBaseUrl = {
    Baidu: "https://www.baidu.com/s?wd=",
    Google: "https://www.google.com/search?q=",
    Github: "https://github.com/search?q=",
  };
  const engines = Object.keys(engineBaseUrl);
  const questions = [
    {
      type: "input",
      name: "key",
      message: "输入搜索内容",
    },
    {
      type: "list",
      name: "engine", //存储当前问题回答的变量key，
      message: "选择搜索引擎",
      choices: engines,
    },
  ];
  // inquirer.prompt(questions)方法会将questions参数中的问题提问给用户，并将用户的回答存储在answers变量中
  inquirer
    .prompt(questions)
    .then((res) => {
      console.log(res, engineBaseUrl[res.engine] + options.search);
      // open(engineBaseUrl[res.engine] + options.search);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
      console.log("🚀error:", error);
    });
}
// 翻译
function translate() {}
