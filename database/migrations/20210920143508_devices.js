exports.up = function (knex, Promise) {
    return knex.schema.createTable('devices', (t) => {
        t.increments('id')
        t.integer('user_id').notNullable()
        t.string('device_id').notNullable()
        t.enu('type', ['ios', 'android']).notNullable()
        t.string('device_token').default(0)
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('devices')
}

// CREATE TABLE IF NOT EXISTS `devices` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `users_id` INT NOT NULL,
//     `device_id` VARCHAR(120) NOT NULL,
//     `type` ENUM('APPLE') NOT NULL,
//     `device_token` VARCHAR(120) NOT NULL,
//     `created_at` DATETIME NOT NULL,
//     `updated_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;
