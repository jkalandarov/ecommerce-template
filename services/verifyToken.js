const jwt = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json({
            status: 'Fail',
            message: 'Access denied'
        })
    }

    try {
        const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verifiedToken
        next()
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Invalid token"
        })
    }
}