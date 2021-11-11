exports.up = function (knex, Promise) {
    return knex.schema.createTable('reports', (t) => {
        t.increments('id')
        t.integer('user_id').notNullable()
        t.integer('reported_by').notNullable()
        t.string('report_type').notNullable()
        t.string('message')
        t.enu('type', ['pending', 'resolved']).notNullable().default('pending')
        t.timestamp('created_at').defaultTo(knex.fn.now())
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('reports')
}

// CREATE TABLE IF NOT EXISTS `reports` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `users_id` INT NOT NULL,
//     `participants_id` INT NOT NULL,
//     `report_type` VARCHAR(45) NOT NULL,
//     `notes` TEXT NOT NULL,
//     `status` ENUM('pending', 'resolved') NOT NULL DEFAULT 'pending',
//     `created_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;
