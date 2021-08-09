
let nodemon = require('nodemon'); // 引入nodemon模块

/**
 * script 重启的脚本
 * ext 检测的文件
 */
nodemon({
  script: 'mock/server.js',
  ext: 'js'
});

nodemon.on('start', function () {
  console.log('server has started');
}).on('quit', function () {
  console.log('server has quit');
  process.exit();
})
  .on('restart', function (files) {
    console.log('server restarted due to: ', files);
  });
