/**
 * 用户子路由
 */
import express from 'express'
import User from '../controller/user/user'

const router = express.Router();

router.get('/createuser', User.createuser);//根据访问路径调用不同的方法
router.get('/deleteuser', User.deleteuser);
router.get('/updateuser', User.updateuser);
router.get('/queryuser', User.queryuser);

export default router