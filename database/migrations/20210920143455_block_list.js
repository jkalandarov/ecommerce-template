exports.up = function (knex, Promise) {
    return knex.schema.createTable('block_list', (t) => {
        t.increments('id')
        t.integer('users_id').notNullable()
        t.integer('blocked_by').notNullable()
        t.string('duration').notNullable()
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('block_list')
}

// CREATE TABLE IF NOT EXISTS `block_list` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `users_id` INT NOT NULL,
//     `participants_id` INT NOT NULL,
//     `created_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;
