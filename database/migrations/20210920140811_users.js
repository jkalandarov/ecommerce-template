exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (t) => {
        t.increments('id')
        t.string('phone').notNullable()
        t.string('first_name')
        t.string('last_name')
        t.string('verification_code').default(0)
        t.integer('is_verified').default('0')
        t.integer('is_blocked').default('0')
        t.enu('type', ['user', 'coach']).default('user')
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users')
}

// CREATE TABLE "users"(
//     "id" serial PRIMARY KEY,
//     "phone" VARCHAR(16) NOT NULL,
//     "firstname" VARCHAR(255) NOT NULL,
//     "lastname" VARCHAR(255) NOT NULL,
//     "password" VARCHAR(255) NOT NULL,
//     "karma" INTEGER NOT NULL,
//     "rating" DOUBLE PRECISION NULL,
//     "avatar_url" VARCHAR(255) NULL,
//     "created_at" TIMESTAMP DEFAULT NOW()
// );
