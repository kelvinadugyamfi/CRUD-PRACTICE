const User = require ('../database/models/user')

const home = async(req, res)=>{
    const users =await User.findAll()
    res.render ('index',{ users })
}


const userInfo = async (req, res)=>{
    const {fullName, lastName, age} = req.body
    const result = await User.create({fullName, lastName, age})
    if (result){
        console.log ('user created successfully')
    }
    res.redirect('/')
}

module.exports = {
                    home,
                    userInfo
}