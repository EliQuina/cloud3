const { format } = require('mysql2');
const { Model } = require('objection'); //llamar a Model de la lob objection

class Proveedor extends Model { //creo herencia de Model
    static get tableName(){
        return 'proveedor';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un daroa, array para una lista
            required: ['nombre', 'telefono'], // campos requeridos 

            properties: {// estructura de los campos 
                id: { type: 'integer'},
                nombre: {type: 'string', minLength: 1},
                telefono: {type: 'string'},
                email: {type: 'string', format: 'email'},
                salario: {type: 'string'},
                fecha: {type: 'string', format: 'date-time'},
                direccion: {type: 'string'},
                estado: {type: 'string'}
            }
        };
    }

    static async getProveedores(){ //metodo para listar Proveedors
        return await Proveedor.query(); //select * from Proveedor
    }

    static async insert(data){ // metodo para insertar Proveedors
        return await Proveedor.query()
        .insert(data);  // insert into Proveedor values
    }

    static async update(data, id){// metodo para editar Proveedor
        return await Proveedor.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id){// metodo para eliminat Proveedor
        return await Proveedor.query()
        .deleteById(id); // delete from Proveedor whwre id = 0

    }

}

module.exports = Proveedor;