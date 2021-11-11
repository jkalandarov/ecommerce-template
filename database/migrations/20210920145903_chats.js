exports.up = function (knex, Promise) {
    return knex.schema.createTable('chats', (t) => {
        t.increments('id')
        t.integer('user_1').notNullable()
        t.integer('user_2').notNullable()
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('chats')
}

// CREATE TABLE IF NOT EXISTS `conversation` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `title` VARCHAR(40) NOT NULL,
//     `creator_id` INT NOT NULL,
//     `channel_id` VARCHAR(45) NOT NULL,
//     `created_at` DATETIME NOT NULL,
//     `updated_at` DATETIME NOT NULL,
//     `deleted_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;
