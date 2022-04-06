const CartM =  require('../models/CartM');

exports.buyTwo = async (req, res) => {

    const itemsInCart = await CartM.query().select().where({userId: id});
}

exports.exceedSum = async (req, res) => {

    const itemsInCart = await CartM.query().select().where({userId: id});
}

exports.useCoupon = async (req, res) => {
    
    const itemsInCart = await CartM.query().select().where({userId: id});
}