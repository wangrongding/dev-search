const open = require('open')
const inquirer = require('inquirer')
// 注册 plugin
inquirer.registerPrompt('search-list', require('inquirer-search-list'))
// 文档列表
const docList = require('./doc-list.js')
module.exports = function openDoc() {
  inquirer
    .prompt([
      {
        type: 'search-list',
        message: '选择要打开的文档/可输入关键字搜索',
        name: 'doc',
        choices: docList.map((item) => {
          // 解决 search-list 不支持 new inquirer.Separator()的问题
          if (item.line || item.type) {
            item.name = item.line
            item.value = false
            delete item.line
            delete item.type
          }
          return item
        }),
        validate: (answer) => !!answer,
      },
    ])
    .then((res) => {
      open(res.doc)
    })
    .catch((error) => {
      console.log('🚀error:', error)
    })
}
