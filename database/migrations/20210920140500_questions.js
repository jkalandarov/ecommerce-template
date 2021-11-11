exports.up = function (knex, Promise) {
    return knex.schema.createTable('questions', (t) => {
        t.increments('id')
        t.integer('user_id').notNullable()
        t.string('title').notNullable()
        t.string('desc')
        t.enu('status', ['active', 'pending', 'finished']).default('active')
        t.enu('rating', ['0', '1', '2', '3', '4', '5']).default('null')
        t.integer('is_anonym').default('0')

        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('questions')
}
