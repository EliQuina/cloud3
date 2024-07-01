/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('proveedor', table => {
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('telefono').notNullable();
        table.string('email').notNullable().unique();
        table.decimal('salario').notNullable();
        table.date('fechacontrato').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('proveedor')
  
};
