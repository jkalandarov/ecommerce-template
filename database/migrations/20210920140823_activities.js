exports.up = function (knex, Promise) {
    return knex.schema.createTable('activities', (t) => {
        t.increments('id')
        t.integer('receiver_id').notNullable()
        t.integer('sender_id').notNullable()
        t.integer('read').default(0)
        t.enu('type', [
            'follow',
            'post',
            'question',
            'question-anonym',
            'comment',
            'like-post',
            'like-comment',
            'reply-comment',
        ]).notNullable()
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('activities')
}

// CREATE TABLE `activities` (
//     "id" serial PRIMARY KEY,
//     "recipient_id" int NOT NULL,
//     "sender_id" int NOT NULL,
//     "read" tinyint(1) NOT NULL DEFAULT 0,
//     "type" varchar(255) NOT NULL DEFAULT 0, -- '1-follow, 2-like, 3-message, 4-new post, 5-reply to post, 6 - mention, 7-liked your comment, 8 - commented on your post, 9-responded to your comment, 10 - mentioned you in a comment, 11  - feedback',
//     "ref_id" int NOT NULL,
//     "created_at" TIMESTAMP DEFAULT NOW()
//   )
