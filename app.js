const express = require ('express')
const ejs = require ('ejs')
const dbConnect = require ('./database/dbConnect')
const User = require ('./database/models/user')
const userRoute = require ('./routes/userRoute')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.set('views',__dirname+'/views')


app.use('/',userRoute)


app.listen(1136,()=>{
    dbConnect.authenticate()
    console.log(`server connected on http://localhost:1136`)
})