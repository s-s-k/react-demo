const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const path = require('path');
const errorHandler = require('errorhandler');
const proxy = require('express-http-proxy');

/* load environment variables from .env file, where API keys and passwords are configured  */
/* dotenv.load({path:'.env.example'}); */

const app = express();

/* Express configuration */

app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, '../dist'), {maxAge: 315576000}));
// 注册ejs 模板为html 简单的说就是原来以。ejs为后缀的模板页 现在可以是html了
/* app.engine('.html',require('ejs')); */
// 设置默认后缀名
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
// app.get('*', (req, res) => {
//   // res.render('header.html',{title: 'home'})
//   res.sendfile(path.join(__dirname, '../../dist/index.html'));
// });
const jsonData = {'data': {'name': '一介布衣', 'url': 'http://yijiebuyi.'}};
const jsonParser = bodyParser.json();
app.post('/v1/exam_indication', jsonParser, function (req, res) {
  console.log(req.body);
  if (!req.body) {
    return res.sendStatus(400);
  };
  res.json(jsonData);
  // create user in req.body
});
app.get('/api/vehicle_checks', jsonParser, function (req, res) {
  const a = {'vehicle_checks': [{'id': 1, 'kssj': '2017-04-10', 'hphm': '沪A1993', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 2, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 3, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 4, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 5, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 6, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 7, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 8, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 9, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}, {'id': 10, 'kssj': '2017-04-10', 'hphm': '沪A8888', 'clsbdh': 'LZWASGA112CKY043', 'syr': '李明 Jesse', 'cllx': 'K01-三厢轿车', 'created_at': '2017-04-14T13:14:00.000Z'}], 'total': 52, 'per_page': 10};
  res.json(a);
});
app.get('/api/check_infos', jsonParser, function (req, res) {
  const infos = {
    'vehicle_check': {
      'id': 10,
      'jylsh': '20170414-005',
      'jyjgbh': 'No.123256',
      'hpzl': '11',
      'hphm': '沪A8888',
      'clsbdh': 'LZWASGA112CKY043',
      'syr': '李明 Jesse',
      'sjhm': '15821746488',
      'sxrq': '2016-12-31',
      'zzrq': '2017-10-30',
      'cllx': 'K01-三厢轿车',
      'syxz': 'B-非营运',
      'zbzl': '2100KG',
      'kssj': '2017-04-10',
      'jssj': '2017-04-10',
      'fdjh': 'A08669741',
      'clpp1': '广汽丰田',
      'clxh': '卡罗拉',
      'ccdjrq': '2015-11-11',
      'ccrq': '2015-05-13',
      'wgjcjyy': '检验员：张三',
      'zpzs': '1',
      'ckbdzplist': '<item><zpzl>21</zpzl><zpurl>https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1268236866,3473800426&fm=11&gp=0.jpg</zpurl></item>',
      'zplist': '<item><zpzl>21</zpzl><zpurl>https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492156632609&di=03f010a570e080d6c6a5206d7793cfd9&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1342606415%2C3542632781%26fm%3D214%26gp%3D0.jpg</zpurl></item>',
      'spzs': '1',
      'splist': '<item><zpzl>21</zpzl><zpurl>https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492156632609&di=03f010a570e080d6c6a5206d7793cfd9&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1342606415%2C3542632781%26fm%3D214%26gp%3D0.jpg</zpurl></item>',
      'bdbhgs': '1',
      'bdbhglist': '1项、3项',
      'created_at': '2017-04-14T13:14:00.000Z'
    },
    'check_infos': [
      {
        'id': 42,
        'vehicle_check_id': 10,
        'category': 0,
        'name': 'http://img1.xcarimg.com/b8/s8403/20161008153542400659130920568.jpg',
        'result': 0,
        'reason': '车拍的不清楚',
        'is_video': true
      },
      {
        'id': 43,
        'vehicle_check_id': 10,
        'category': 1,
        'name': 'http://img1.xcarimg.com/b8/s8403/20161008153543590596112257504.jpg',
        'result': 1,
        'reason': '车拍的不清楚',
        'is_video': false
      },
      {
        'id': 44,
        'vehicle_check_id': 10,
        'category': 2,
        'name': 'http://img1.xcarimg.com/b8/s8403/20161008153543194882613163422.jpg',
        'result': 2,
        'reason': '车拍的不清楚',
        'is_video': false
      },
      {
        'id': 45,
        'vehicle_check_id': 10,
        'category': 3,
        'name': 'http://img1.xcarimg.com/b8/s8403/20161008153544302575958121137.jpg',
        'result': 2,
        'reason': '车拍的不清楚',
        'is_video': false
      },
      {
        'id': 46,
        'vehicle_check_id': 10,
        'category': 4,
        'name': 'http://img1.xcarimg.com/b8/s8403/20161008153546128780651590856.jpg',
        'result': 2,
        'reason': '车拍的不清楚',
        'is_video': false
      },
      {
        'id': 47,
        'vehicle_check_id': 10,
        'category': 5,
        'name': 'http://img1.xcarimg.com/b8/s8403/20161008153545704852041360735.jpg',
        'result': 2,
        'reason': '车拍的不清楚',
        'is_video': false
      }
    ]
  };
  res.json(infos);
});
// app.use('/api/vehicle_checks', proxy('192.168.100.101:4567', {
//   proxyReqPathResolver: function (req) {
//     console.log(req.url);
//     return require('url').parse(req.url).path;
//   }
// }));

/* Error handleer */
app.use(errorHandler());
/* Start express server */
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});