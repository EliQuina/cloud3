const { format } = require('mysql2');
const { Model, ForeignKeyViolationError } = require('objection'); //llamar a Model de la lob objection

class Producto extends Model { //creo herencia de Model
    static get tableName(){
        return 'producto';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un daroa, array para una lista
            required: ['nombre', 'especificaciones'], // campos requeridos 

            properties: {// estructura de los campos 
                id: { type: 'integer'},
                nombre: {type: 'string', minLength: 1},
                precio: {type: 'string'},
                stok: {type: 'string'},
                categoria: {type: 'string'},
                especificaciones: {type: 'string'}
            }
        };
    }

    static async getProducto(){ //metodo para listar  Producto
        return await Producto.query(); //select * from Producto
    }

    static async insert(data){ // metodo para insertar  Producto
        return await Producto.query()
        .insert(data);  // insert into producto values
    }

    static async update(data, id){// metodo para editar Producto
        return await Producto.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id){// metodo para eliminat Producto
        return await Producto.query()
        .deleteById(id); // delete from producto whwre id = 0

    }

}

module.exports = Producto;