const chokidar = require('chokidar')
const { spawn } = require('child_process')

// 开发环境下，监听 lib 目录下的文件变化，重新构建
chokidar.watch(['./src', './index.js']).on('change', () => {
  console.log('重新构建中...')
  // 重新 sudo npm link
  spawn('sudo', ['npm', 'link'])
  console.log('🚀构建完成')
})
