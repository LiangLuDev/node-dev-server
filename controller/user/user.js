/**
 * 用户模块逻辑实现
 */
import {sequelize, Sequelize} from '../../db/sql'
import constant from '../../utils/constant'
import crypto from 'crypto'//md5 加密
import jwt from 'jsonwebtoken' //token模块

const User = sequelize.import('../../models/user/user')
const Op = Sequelize.Op;

class user {

    constructor() {
    }

    //创建用户
    createuser(req, res, next) {
        let username = req.query.username;
        //密码md5加密
        let password = crypto.createHash('md5').update(username).digest('hex');
        //创建用户时创建token
        let token = jwt.sign({username: username}, constant.jwtsecret, {
            expiresIn: "7d"  // 一周过期
        })
        let user = {
            username: username,
            password: password,
            age: 10,
            token: token
        }
        User.userCreate(user).then(result => {
            res.json({
                code: constant.RESULT.SUCCESS.code,
                msg: constant.RESULT.SUCCESS.msg,
                data: '创建成功'
            });
        }).catch(err => {
            res.json({
                code: constant.RESULT.NO_DATA.code,
                msg: constant.RESULT.NO_DATA.msg,
                data: err
            });
        })
    }

    //删除用户
    deleteuser(req, res, next) {
        let username = req.query.username

        User.userDelete({
            where: {
                username: username
            }
        }).then(result => {
            res.json({
                code: constant.RESULT.SUCCESS.code,
                msg: constant.RESULT.SUCCESS.msg,
                data: '删除成功'
            });
        }).catch(err => {
            res.json({
                code: constant.RESULT.NO_DATA.code,
                msg: constant.RESULT.NO_DATA.msg,
                data: err
            });
        })
    }

    //更新用户信息
    updateuser(req, res, next) {
        let username = req.query.username
        let newDate = {
            username: '11111',
            age: 14
        }
        User.userUpdate(newDate, {
            where: {
                username: username
            }
        }).then(result => {
            res.json({
                code: constant.RESULT.SUCCESS.code,
                msg: constant.RESULT.SUCCESS.msg,
                data: '更新成功'
            });
        }).catch(err => {
            res.json({
                code: constant.RESULT.NO_DATA.code,
                msg: constant.RESULT.NO_DATA.msg,
                data: err
            });
        })
    }

    //条件查询数据
    queryuser(req, res, next) {
        let username = req.query.username;
        User.userFindOne({
            where: {
                [Op.and]: [{username: username}, {age: 10}]//op 条件筛选 具体用法查看文档
            }
        }).then(userinfo => {
            res.json({
                code: constant.RESULT.SUCCESS.code,
                msg: constant.RESULT.SUCCESS.msg,
                data: userinfo
            });
        }).catch(err => {
            res.json({
                code: constant.RESULT.NO_DATA.code,
                msg: constant.RESULT.NO_DATA.msg,
                data: err
            });
        })
    }

}


module.exports = new user()