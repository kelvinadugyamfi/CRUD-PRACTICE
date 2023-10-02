const express = require('express')
const {home, userInfo} = require ('../controllers/userController')


const app = express.Router()

app.get('/', home)

app.post('/', userInfo)

module.exports = app