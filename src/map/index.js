const open = require("open");
const inquirer = require("inquirer");
module.exports = function openMap() {
  const mapList = [
    {
      name: "百度地图",
      value: "https://map.baidu.com/search",
    },
    { name: "高德地图", value: "https://map.amap.com/search" },
    { name: "谷歌地图", value: "https://www.google.com/maps" },
    new inquirer.Separator("==================="),
    {
      name: "腾讯地图",
      value: "https://map.qq.com/m/search/index/keyword/%E5%8C%97%E4%BA%AC",
    },
  ];
  const questions = [
    {
      type: "list",
      name: "map", //存储当前问题回答的变量key，
      message: "选择搜索引擎",
      choices: mapList,
    },
  ];
  inquirer
    .prompt(questions)
    .then((res) => {
      open(res.map);
    })
    .catch((error) => {
      console.log("🚀error:", error);
    });
};
