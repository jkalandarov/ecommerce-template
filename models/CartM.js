const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Cart extends Model {
    static get tableName() {
        return 'cart'
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }
}

module.exports = Cart
