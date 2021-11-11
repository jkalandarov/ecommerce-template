const jwt = require('jsonwebtoken')
const SliderM = require('../models/SliderM')

exports.slides = async (req, res, next) => {
    const slides = await SliderM.query().select()
    console.log(slides);
    res.status(200).json({slides})
}
