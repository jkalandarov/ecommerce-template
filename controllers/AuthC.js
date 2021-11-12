const jwt = require('jsonwebtoken')
const User = require('../models/UserM')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
    
    //Check user from db
    const [user] = await User.query().select().where({
        username: req.body.username
    }).limit(1)
    if(user == null) res.status(400).send('Cannot find user')
    console.log(user);
    //Check if input password is true
    const hash = await bcrypt.compare(req.body.password, user.password)
    
    try {
        if(hash){
            const token = await jwt.sign({ 
                userID: user.id, 
                username: user.username,
                userEmail: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            }, process.env.TOKEN_SECRET, {
                expiresIn: "3days"
            })

            res.header('auth-token', token).json({
                staus: "success",
                message: 'You have successfully logged in!',
                token: token
            })
        }
        else res.json({
            staus: "Fail",
            message: 'Invalid username or password'
        })
    } catch (err) {
        console.error(err)
    }

}

exports.register = async(req, res) =>{
    
    try {
        const userData = req.body;
        
        //Hashing and salting pswd
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        userData.password = hashedPassword

        //Inserting a new user into db
        const new_user = await User.query().insert({
            ...userData
        })

        res.status(200).json({
            Message: "You've successfully registered!",
        }).redirect('/user/login')

        
    } catch (err) {
        console.error(err)
    }
    
}
