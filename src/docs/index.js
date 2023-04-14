const open = require('open')
const inquirer = require('inquirer')
module.exports = function openDoc() {
  const docList = [
    {
      name: 'Vue3',
      value: 'https://staging-cn.vuejs.org/guide/introduction.html',
    },
    {
      name: 'React',
      value: 'https://zh-hans.reactjs.org/docs/getting-started.html',
    },
    {
      name: 'Angular',
      value: 'https://angular.cn/start',
    },
    new inquirer.Separator('==============='),
    {
      name: 'Element-Plus',
      value: 'https://element-plus.gitee.io/zh-CN/component/button.html',
    },
    {
      name: 'Ant Design',
      value: 'https://ant.design/docs/react/introduce-cn',
    },
    {
      name: 'Echarts',
      value: 'https://echarts.apache.org/zh/index.html',
    },
    new inquirer.Separator('==============='),
    {
      name: 'Webpack',
      value: 'https://www.webpackjs.com/concepts/',
    },
    {
      name: 'Vite',
      value: 'https://cn.vitejs.dev/guide/',
    },
    {
      name: 'Rollup',
      value: 'https://www.rollupjs.com/',
    },
    {
      name: 'Babel',
      value: 'https://babel.docschina.org/',
    },
    new inquirer.Separator('==============='),
    {
      name: 'Axios',
      value: 'https://www.axios-http.cn/docs/intro',
    },
    {
      name: 'Lodash',
      value: 'https://www.lodashjs.com/',
    },
    new inquirer.Separator('==============='),
    {
      name: 'Pinia',
      value: 'https://pinia.web3doc.top/introduction.html',
    },
    {
      name: 'VueUse',
      value: 'https://vueuse.org/guide/',
    },
    {
      name: 'Nuxt',
      value: 'https://nuxtjs.org/guide/',
    },
    {
      name: 'VueRouter',
      value: 'https://router.vuejs.org/zh/introduction.html',
    },
    {
      name: 'TailwindCSS',
      value: 'https://www.tailwindcss.cn/docs',
    },
    {
      name: 'Eslint',
      value: 'http://eslint.cn/docs/user-guide/getting-started',
    },
    {
      name: 'Git',
      value: 'https://git-scm.com/book/zh/v2',
    },
    {
      name: 'VS Code updates',
      value: 'https://code.visualstudio.com/updates',
    },
    {
      name: '微信小程序',
      value: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    },
    {
      name: 'Nginx',
      value: 'https://wizardforcel.gitbooks.io/nginx-doc/content/Text/1.1_overview.html',
    },
    {
      name: 'Node',
      value: 'http://nodejs.cn/api/',
    },
    {
      name: 'Npm',
      value: 'https://docs.npmjs.com/about-npm',
    },
    {
      name: 'Yarn',
      value: 'https://yarnpkg.com/zh-Hans/docs/install',
    },
    {
      name: 'TensorFlow.js',
      value: 'https://tensorflow.google.cn/js?hl=zh_cn',
    },
    {
      name: 'Qiankun',
      value: 'https://qiankun.umijs.org/zh/guide',
    },
    {
      name: '印记中文',
      value: 'https://docschina.org/',
    },
    new inquirer.Separator('==============='),
  ]
  const questions = [
    {
      type: 'list',
      name: 'doc',
      message: '选择要打开的文档',
      choices: docList,
    },
  ]
  inquirer
    .prompt(questions)
    .then((res) => {
      open(res.doc)
    })
    .catch((error) => {
      console.log('🚀error:', error)
    })
}
