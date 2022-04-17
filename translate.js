#! /usr/bin/env node
// ==========================================================
require("colors");
const say = require("say");
const qs = require("querystringify");
const argv = require("yargs").argv;
// ==========================================================
let queryStr = encodeURI(argv._.join(" "));

// 无参数,或帮助
if (!queryStr || argv.help == true || argv.H == true || argv.h == true) {
  console.log("-------------------------------");
  console.log("查单词: ".bold.blue);
  console.log("ding [单词] 或者 [短句]", "\n");
  console.log("汉译英: ".bold.red);
  console.log("ding [文本]", "\n");
  console.log("单词/短句发音: ".bold.yellow);
  console.log("ding [单词] [短句] --say");
  console.log("ding [单词] [短句] -S");
  console.log("-------------------------------");
  console.log("请在'ding'命令后输入单词或断句!");
  console.log("word or sentence required...");
} else {
  //播放
  if (argv.say == true || argv.S == true) {
    console.log("播放中...".rainbow);
    say.speak(qs.unescape(queryStr));
  }
  //查词
  translation(queryStr);
}

// 请求翻译
function translation(text) {
  // // 对驼峰的连续单词进行分割后转义
  // queryStr = encodeURI(
  //   queryStr
  //     .replace(/([A-Z])/g, " $1")
  //     .replace(/-/g, " ")
  //     .toLowerCase()
  // );
  let query = qs.escape(
    text
      .replace(/([A-Z])/g, " $1")
      .replace(/-/g, " ")
      .toLowerCase()
  );
  let options = `http://aidemo.youdao.com/trans?q=${query}&&from=Auto&&to=Auto`;
  return new Promise((resolve, reject) => {
    // 处理响应的回调函数
    function callback(response) {
      response.setEncoding("utf-8");
      // 不断更新数据
      response.on("data", function (data) {
        let result = JSON.parse(data);
        // console.log("🚀🚀🚀 / result", result);
        resolve(result);
      });
      response.on("end", function () {
        console.log("---------------- by 前端超人 ----------------");
      });
    }
    // 向服务端发送请求
    let req = http.request(options, callback);
    req.end();
  });
}
