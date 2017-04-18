const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const path = require('path');
const errorHandler = require('errorhandler');
const proxy = require('express-http-proxy');

/* load environment variables from .env file, where API keys and passwords are configured  */
/* dotenv.load({path:'.env.example'}); */
const proxyURL = 'localhost:9000';
const app = express();

/* Express configuration */

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '../dist'), {maxAge: 315576000}));
// 注册ejs 模板为html 简单的说就是原来以。ejs为后缀的模板页 现在可以是html了
/* app.engine('.html',require('ejs')); */
// 设置默认后缀名
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers

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
app.use('/api', proxy(proxyURL, {
  forwardPath: function (req) {
    console.log(req.url + ' proxy');
    return require('url').parse('/api' + req.url).path;
  }
}));
app.get('*', (req, res) => {
  // res.render('header.html',{title: 'home'})
  res.sendfile(path.join(__dirname, '../../dist/index.html'));
});

/* Error handleer */
app.use(errorHandler());
/* Start express server */
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});