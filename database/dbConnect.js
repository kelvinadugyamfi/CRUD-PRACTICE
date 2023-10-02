const {Sequelize} = require ('sequelize')
const dotEnv = require ('dotenv')
dotEnv.config()

const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_PASS = process.env.DB_PASS
const DB_USER = process.env.DB_USER

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,{
    host : DB_HOST,
    dialect : 'mysql'
})

module.exports = sequelize