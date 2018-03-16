const Sequelize = require('sequelize');

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


exports.sequelize = sequelize;
exports.Sequelize = Sequelize;