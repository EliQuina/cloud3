/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('descripción').notNullable();
        table.double('precio').notNullable();
        table.integer('stok').notNullable();
        table.string('categoria').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto')
  
};
