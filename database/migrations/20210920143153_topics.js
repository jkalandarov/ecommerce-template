exports.up = function (knex, Promise) {
    return knex.schema.createTable('topics', (t) => {
        t.increments('id')
        t.integer('parent_id').default(0)
        t.string('topic').notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('topics')
}

// CREATE TABLE "topics"(
//     "id" serial PRIMARY KEY,
//     "parent_id" int NOT NULL DEFAULT 0,
//     "name" varchar(255) NOT NULL,
//     "created_at" TIMESTAMP DEFAULT NOW()
// );
