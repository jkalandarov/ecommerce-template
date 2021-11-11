exports.up = function (knex, Promise) {
    return knex.schema.createTable('access', (t) => {
        t.increments('id')
        t.integer('user_id').notNullable()
        t.integer('device_id').notNullable()
        t.string('token').default(0)
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('access')
}

// SHOW WARNINGS;
// CREATE TABLE IF NOT EXISTS `access` (
//   `id` INT NOT NULL,
//   `users_id` INT NOT NULL,
//   `devices_id` INT NOT NULL,
//   `token` VARCHAR(60) NOT NULL,
//   `created_at` DATETIME NOT NULL,
//   `deleted_at` DATETIME NOT NULL,
//   PRIMARY KEY (`id`))
// ENGINE = InnoDB;
