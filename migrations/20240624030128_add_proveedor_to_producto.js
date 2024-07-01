/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Agregar la columna deCustomer
        table.integer('deProveedor').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deProveedor').references('id').inTable('proveedor');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deProveedor');
    
        // Eliminar la columna deCustomer
        table.dropColumn('deProveedor');
      });
};
