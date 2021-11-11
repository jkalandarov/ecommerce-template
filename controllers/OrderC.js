const OrdersM = require('../models/OrdersM')
const verifyToken = require('../services/verifyToken')


exports.place = async (req, res) =>{
    
    res.json({
        message: "If you are signed in, you can order goods."
    })
    // const items = await OrdersM.query().toKnexQuery().insert({
    //     cust_id: user_id,
        
    // })
}