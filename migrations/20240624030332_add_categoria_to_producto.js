/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Agregar la columna deCustomer
        table.integer('deCategoria').unsigned();
    
        // Configurar la clave foránea
        table.foreign('deCategoria').references('id').inTable('categoria');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('producto', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('deCategoria');
    
        // Eliminar la columna deCustomer
        table.dropColumn('deCategoria');
      });
};
