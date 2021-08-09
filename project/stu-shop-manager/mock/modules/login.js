let Mock = require('mockjs')
let express = require('express')
let router = express.Router();

router.use('/auth/manager_login', function (req, res) {
  console.log(req.body)
  let params = req.body
  let data
  if (params.username === 'admin' && params.password === '666') {
  // 调用mock方法模拟数据
    data = Mock.mock({
      code: '200',
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'data': {
        name: '6667887777',
        token: '639ecb72c9a1b0caf55a02dfb706fc0b',
        photo: 'https://static.beejeen.com/jpg/2021-03-30/989e55c465b646ddbe1200c4b2762fb6.jpg',
        phone: '18777777777',
        uuid: '3330edfa-fe10-49ee-89eb-850897ab565e'
      },
      message: '登录成功 '
    }
    );
  } else {
    data = Mock.mock({
      code: '400',
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'data': null,
      message: '登录错误！ '
    }
    );
  }
  return res.json(data);
})

module.exports = router;
