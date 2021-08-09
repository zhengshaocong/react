let express = require('express')
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());  // body-parser 解析json格式数据
app.use(bodyParser.urlencoded({  // 此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

let router = express.Router();


app.use('/api', require('./modules'))

app.listen(3001)
