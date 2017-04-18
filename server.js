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