const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Menus extends Model {
    static get tableName() {
        return 'menus'
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }
}

module.exports = Menus
