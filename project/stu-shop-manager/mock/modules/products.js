let Mock = require('mockjs')
let express = require('express')
let router = express.Router();
const Random = Mock.Random

router.use('/admin/products', function (req, res) {
  let params = req.body
  let moreList = []
  for (let i = 0; i < 100; i++) {
    let newObject = {
      mtime: Random.datetime(), // 随机生成日期时间
      score: Random.natural(1, 800), // 随机生成1-800的数字
      rank: Random.natural(1, 100), // 随机生成1-100的数字
      stars: Random.natural(0, 5), // 随机生成1-5的数字
      nickname: Random.cname()// 随机生成中文名字
    }
    moreList.push(newObject)
  }
  // 调用mock方法模拟数据
  let data = Mock.mock({
    code: '200',
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'data': moreList,
    message: '登录成功 '
  })
  return res.json(data);
})

// let tableList = []
// for (let i = 0; i < 100; i++) {
//   let newObject = {
//     title: Random.csentence(5, 10), //  Random.csentence( min, max )
//     name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//     url: Random.url(), // 生成web地址
//     date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//   }
//   tableList.push(newObject)
// }

// router.use('/api/products', 'post', (params) => {
//   const [index, size, total] = [JSON.parse(params.body).page, JSON.parse(params.body).size, tableList.length]
//   let len = total / size
//   // console.log(index, size, total, 'index, size, total')
//   const totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len
//   // 截取list
//   // const newProduceNewsData = tableList.slice(index * size, (index + 1) * size)
//   const newProduceNewsData = tableList.slice((index - 1) * size, index * size)
//   // console.log(newProduceNewsData, 'newProduceNewsData')
//   return {
//     code: '0',
//     message: 'success',
//     data: {
//       page: index,
//       size: size,
//       list: newProduceNewsData,
//       total: total,
//       totalPages: totalPages
//     }
//   }
// })

module.exports = router;
