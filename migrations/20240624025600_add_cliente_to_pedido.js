/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('pedido', function(table) {
        // Agregar la columna deCustomer
        table.integer('deCliente').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deCliente').references('id').inTable('cliente');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('pedido', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deCliente');
    
        // Eliminar la columna deCustomer
        table.dropColumn('deCliente');
      });
  
};
