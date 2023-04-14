const open = require('open')
const inquirer = require('inquirer')
// Register plugin
inquirer.registerPrompt('search-list', require('inquirer-search-list'))
const docList = require('./doc-list.js')
module.exports = function openDoc() {
  inquirer
    .prompt([
      {
        type: 'search-list',
        message: '选择要打开的文档/可输入关键字搜索',
        name: 'doc',
        choices: docList,
        // validate: function (answer) {
        //   if (answer.name === 'Bottle') {
        //     return `Whoops, ${answer.name} is not a real topping.`
        //   }
        //   return true
        // },
      },
    ])
    .then((res) => {
      open(res.doc)
    })
    .catch((error) => {
      console.log('🚀error:', error)
    })
}
