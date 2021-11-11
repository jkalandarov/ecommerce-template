exports.up = function (knex, Promise) {
    return knex.schema.createTable('messages', (t) => {
        t.increments('id')
        t.integer('reciever').notNullable()
        t.integer('sender').notNullable()
        t.integer('chat_id').notNullable()
        t.integer('reported_by').notNullable()
        t.string('report_type').notNullable()
        t.enu('type', ['text', 'image', 'audio']).notNullable()
        t.enu('status', ['active', 'deleted', 'edited']).notNullable()
        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('messages')
}

// CREATE TABLE IF NOT EXISTS `messages` (
//     `id` INT NOT NULL,
//     `guid` VARCHAR(100) NOT NULL,
//     `conversation_id` INT NOT NULL,
//     `sender_id` INT NOT NULL,
//     `message_type` ENUM('text', 'image', 'vedio', 'audio') NOT NULL,
//     `message` VARCHAR(255) NOT NULL DEFAULT '',
//     `created_at` DATETIME NOT NULL,
//     `deleted_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;
