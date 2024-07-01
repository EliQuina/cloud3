/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedido', table => {
        table.increments('id').primary();
        table.date('fecha').notNullable();
        table.decimal('monto').notNullable();
        table.string('estado').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pedido')
  
};
