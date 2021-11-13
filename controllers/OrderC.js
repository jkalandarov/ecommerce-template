const OrdersM = require('../models/OrdersM')
const verifyToken = require('../services/verifyToken')

exports.place = async (req, res) =>{

    let orderData = req.body, order_id
    //Get the ID of the previous order
    let [lastOrderID] = await OrdersM.query().select('order_id').orderBy('order_date', 'desc').limit(1)
    //Set the ID for this order
    if (!lastOrderID) order_id = 1
    else order_id = lastOrderID.order_id + 1
    
    const {cust_id} = orderData
    //Record each product in DB
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
        } catch (err) {
            console.error(err);
        }  
    })

    res.status(201).json({
        status: "Success",
        orderID: order_id,
        message: "Order has been placed"
    })
}

exports.checkout = async (req, res)=> {

    const {order_id, user_id} = req.body
    const reducer = (previousValue, {total_price}) => previousValue + total_price;

    const unpaidItems = await OrdersM.query().select('order_id', 'cust_id', 'product_id', 'quantity', 'price', 'discount', 'total_price').where({cust_id: user_id, payment_date: null})
    const total_order = unpaidItems.reduce(reducer, 0)
    const order = {
        unpaidItems,
        total_order
    }
    res.json(order)
}