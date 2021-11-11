exports.up = function (knex, Promise) {
    return knex.schema.createTable('post_likes', (t) => {
        t.increments('id')
        t.integer('post_id').notNullable()
        t.integer('user_id').notNullable()
        t.enu('status', ['liked', 'disliked', 'deleted']).notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('post_likes')
}

// CREATE TABLE "post_likes"(

//     "created_at" TIMESTAMP DEFAULT NOW()
// );
