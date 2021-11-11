const MenusM = require('../models/MenusM')
const SliderM = require('../models/SliderM')
const NewsM = require('../models/NewsM')
const ProductsM = require('../models/ProductsM')
const PartnersM = require('../models/PartnersM')

exports.home = async (req,res,next) => {
    const menus = await MenusM.query().select('*')
    const slider = await SliderM.query().select('*')
    const news = await NewsM.query().select('*')
    const topProducts = await ProductsM.query().select('*').where({isHit: 1})
    const partners = await PartnersM.query().select('*')

    console.log(menus)
    res.status(200).json({
        menus,
        slider,
        news,
        topProducts,
        partners,
    })
}

