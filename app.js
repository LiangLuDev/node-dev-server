import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import conscant from './utils/constant'

import index from './routes/index'
import error from './routes/error'
import api_router from './routes/api'

const app = express();

const port = process.env.PORT || 3390;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 设置superSecret 全局参数
app.set('superSecret', conscant.jwtsecret);

//首页
app.use('/', index);
//api路由
api_router(app)
//错误页面
error(app)

app.listen(port)
console.log('服务已开启...');