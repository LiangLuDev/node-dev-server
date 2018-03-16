module.exports = function (sequelize, DateTypes) {
    const User = sequelize.define('数据库表名', {
        username: {
            type: DateTypes.STRING,//字段类型
            field: 'MemLoginID',//对应数据库字段名
            primaryKey: true//设置主键
        },
        age: {
            type: DateTypes.INTEGER,
            field: 'Age'
        },
        password: {
            type: DateTypes.STRING,
            field: 'Pwd'
        },
        token: {
            type: DateTypes.STRING,
            field: 'Token'
        }
    }, {
        underscored: true, //额外字段以下划线来分割
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
    })

    //静态方法

    /**
     * 创建用户
     * @param value 用户信息对象
     * @returns
     */
    User.userCreate = value => {
        return User.create(value)
    }

    /**
     * 查询符合条件的第一个用户（查询全部用户使用： User.findAll）
     * @param options 查询用户条件
     * @returns Promise
     */
    User.userFindOne = options => {
        return User.findOne(options)
    }

    /**
     *更新用户信息
     * @param value 更新为此数据
     * @param options 更新数据条件（更新哪一条）
     * @returns Promise
     */
    User.userUpdate = (value, options) => {
        return User.update(value, options)
    }

    /**
     * 删除用户
     * @param options 删除条件（删除哪一条）
     * @returns Promise
     */
    User.userDelete = options => {
        return User.destroy(options)
    }

    return User
}






