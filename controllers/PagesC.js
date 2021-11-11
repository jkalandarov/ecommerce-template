const jwt = require('jsonwebtoken')
const User = require('../models/UserM')

exports.login = async (req, res, next) => {
    // console.log(req.body)
    try {
        const { phone } = req.body
        if (!phone) {
            return res.status(200).json({
                isOk: false,
                message: 'Telefon raqam kiritilmagan',
            })
        }

        return res.status(200).json({
            isOk: true,
            message: `${phone}, ushbu raqamga maxfiy kod jo'natildi.`,
        })
    } catch (error) {
        return res.status(200).json({
            isOk: false,
            message: error.message,
        })
    }
}
