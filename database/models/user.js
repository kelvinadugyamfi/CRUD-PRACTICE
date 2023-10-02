const {Sequelize, DataTypes} = require ('sequelize')
const dbConnect = require ('../dbConnect')

const User = dbConnect.define('User',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    firstName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    lastName : {
        type : DataTypes.STRING,
        allowNull : false 
    },
    age : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
}) 

User.sync({alter : true})

module.exports = User