exports.up = function (knex, Promise) {
    return knex.schema.createTable('post_comments', (t) => {
        t.increments('id')
        t.string('comment').notNullable()
        t.integer('post_id').notNullable()
        t.integer('user_id').notNullable()
        t.integer('comment_id').default(0)
        t.integer('is_thread').default(0)
        t.integer('is_pinned').default(0)
        t.integer('likes').default(0)
        t.integer('dislikes').default(0)
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('post_comments')
}

// CREATE TABLE "post_comments"(
//     "id" serial PRIMARY KEY,
//     "post_id" INTEGER NOT NULL,
//     "user_id" INTEGER NOT NULL,
//     "comment" VARCHAR(255) NOT NULL,
//     "is_pinned" BOOL DEFAULT 'f',
//     "comment_id" VARCHAR(255) NOT NULL DEFAULT 0,
//     "is_thread" BOOL DEFAULT 'f',
//     "likes" VARCHAR(255) NOT NULL,
//     "dislikes" VARCHAR(255) NOT NULL,
//     "created_at" TIMESTAMP DEFAULT NOW()
// );
