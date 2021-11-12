const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Orders extends Model {
    static get tableName() {
        return 'order_details'
    }
    // $beforeInsert() {
    //     this.order_date = new Date().toISOString()
    // }

    $beforeUpdate() {
        this.ship_date = new Date().toISOString()
    }
}

module.exports = Orders
