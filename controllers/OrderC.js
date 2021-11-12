const OrdersM = require('../models/OrdersM')
const verifyToken = require('../services/verifyToken')


exports.place = async (req, res) =>{

    let orderData = req.body, order_id

    let [lastOrderID] = await OrdersM.query().select('order_id').orderBy('order_date', 'desc').limit(1)
  
    if (!lastOrderID) {
        order_id = 1
    } else {
        order_id = lastOrderID.order_id + 1
    }
    
    const {cust_id} = orderData
    console.log(order_id);
    
    
    orderData.items.forEach(async elem => {
        try {
            const items = await OrdersM.query().insert({
                order_id: order_id,
                cust_id: cust_id,
                product_id: elem.product_id,
                quantity: elem.quantity,
                price: elem.price,
                discount: elem.discount,
                total_price: ((elem.quantity * elem.price) - (elem.quantity * elem.price)*elem.discount/100).toFixed(2)
            })
            res.status(200).json(items)
        } catch (err) {
            console.error(err);
        }
        
    });
    
}