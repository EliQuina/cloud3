/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('pedido', function(table) {
        // Agregar la columna deCustomer
        table.integer('deEmpleado').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deEmpleado').references('id').inTable('empleado');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('pedido', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deEmpleado');
    
        // Eliminar la columna deCustomer
        table.dropColumn('deEmpleado');
      });
};
