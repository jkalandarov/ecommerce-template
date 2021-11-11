const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Slider extends Model {
    static get tableName() {
        return 'slider'
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }
}

module.exports = Slider
