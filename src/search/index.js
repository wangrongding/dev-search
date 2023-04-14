const open = require('open')
const inquirer = require('inquirer')
const qs = require('querystring')
// =========================================================
module.exports = function search(key) {
  console.log('🚀🚀🚀 / key:', key)
  const engineList = [
    new inquirer.Separator('========常用======='),
    { name: 'Baidu', value: 'https://www.baidu.com/s?wd=' },
    { name: 'Google', value: 'https://www.google.com/search?q=' },
    { name: 'Github', value: 'https://github.com/search?q=' },
    { name: 'Npm', value: 'https://www.npmjs.com/search?q=' },
    { name: 'StackOverflow', value: 'https://stackoverflow.com/search?q=' },
    new inquirer.Separator('========其他======='),
    { name: 'Eslint', value: 'https://eslint.cn/docs/rules/' },
    { name: 'typescript-eslint', value: 'https://typescript-eslint.io/rules/' },
    { name: 'Zhihu', value: 'https://www.zhihu.com/search?type=content&q=' },
    { name: 'Bilibili', value: 'https://search.bilibili.com/all?keyword=' },
    { name: 'Juejin', value: 'https://juejin.im/search?query=' },
    {
      name: 'Wikipedia',
      value: 'https://en.wikipedia.org/w/index.php?search=',
    },
    { name: 'Twitter', value: 'https://twitter.com/search?q=' },
    { name: 'Youtube', value: 'https://www.youtube.com/results?search_query=' },
    { name: 'V2ex', value: 'https://www.v2ex.com/search?q=' },
    { name: 'Weibo', value: 'https://s.weibo.com/weibo/' },
    { name: 'Youdao', value: 'https://www.youdao.com/w/eng/' },
  ]
  const questions = [
    {
      type: 'list',
      name: 'engine', //存储当前问题回答的变量key，
      message: '请选择搜索引擎:',
      choices: engineList,
    },
  ]
  // inquirer.prompt(questions)方法会将questions参数中的问题提问给用户，并将用户的回答存储在answers变量中
  inquirer
    .prompt(questions)
    .then((res) => {
      open(res.engine + qs.unescape(key))
    })
    .catch((error) => {
      console.log('🚀error:', error)
    })
}
