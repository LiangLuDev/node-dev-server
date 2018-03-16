## node-dev-server（基于Express，Sequelize、IIS的MVC项目）
### 功能应用
> - 基于Express开发
> - token登录验证
> - 数据库模块Sequelize使用
> - windows server iis部署

### 项目介绍
#### 1. 基于Express开发
> Express框架的强大无法言语，可以省很多事情。让开发更简单
> 你还不知道？先去了解一下吧 [Express 4.X中文文档](http://www.expressjs.com.cn/4x/api.html)
 
#### 2. 使用Token验证
> 用户创建的创建token，后面每个请求header携带token
> 更多用法可以 [查看使用文档](https://github.com/auth0/node-jsonwebtoken)



 token验证
```javascript
    // 取token 数据 
    let token = req.headers['access-token'];
    //token验证
    jwt.verify(token, constant.jwtsecret, (err, decoded) => {
            if (err) {
               ...
            } else {
                req.decoded = decoded;
                next();//继续下一步路由
            }
        })

```
#### 3. Sql框架Sequelize使用
> Sequelize框架针对于mysql、sqlite、postgres、sql (微软数据库)的使用
> 更多使用查看使用文档 [英文版](http://docs.sequelizejs.com/) [中文版](https://demopark.github.io/sequelize-docs-Zh-CN/)

数据库配置连接
```javascript
const sequelize = new Sequelize('数据库', '用户名', '密码', {
    host: 'localhost',//数据库地址
    dialect: 'mssql',//数据库类型  'mysql'|'sqlite'|'postgres'|'mssql'
    // 用于数据库连接池的池配置
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
    define: {
        timestamps: false,
        // schema: "dbo"
    }
});
//测试数据库链接
sequelize.authenticate().then(function () {
    console.log("数据库连接成功");
}).catch(function (err) {
    //数据库连接失败时打印输出
    console.error(err);
    throw err;
});
```
数据库使用
ps.我只列出了基本操作，具体操作可看[代码实现](https://github.com/LiangLuDev/node-dev-server/blob/e97bc617bb60c20fcc6c12f72a3028a052cddb74/models/user/user.js)，代码注释清楚
``` javascript
    创建用户  User.create(value)
	查询符合条件的第一个用户  User.findOne(options)
    更新用户信息 User.update(value, options)
    删除用户 User.destroy(options)
```

#### 3. windows server iis部署 
> 如果服务器使用的不是windows server 系统，下面就不用管了。
> 根目录的web.config文件针对于在iis部署项目的文件。
> [具体部署流程](https://www.cnblogs.com/aieceo/p/7906640.html)



### 意见反馈
----------

如果代码有错误，或者有什么不清楚的地方，请反馈到：issue、927195249@qq.com 或者LiangLuDev@gmail.com

如果觉得对你有用的话，点一下右上的星星赞一下吧!