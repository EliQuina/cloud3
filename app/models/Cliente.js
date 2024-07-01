const { format } = require('mysql2');
const { Model } = require('objection'); //llamar a Model de la lob objection

class Cliente extends Model { //creo herencia de Model
    static get tableName(){
        return 'cliente';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un daroa, array para una lista
            required: ['name', 'email'], // campos requeridos 

            properties: {// estructura de los campos 
                id: { type: 'integer'},
                name: {type: 'string', minLength: 1},
                email: {type: 'string', format: 'email'},
                edad: {type: 'integer'},
                fecha: {type: 'string', format: 'date'},
                cedula: {type: 'integer', minLength: 10},
                apellido: {type: 'string', minLength: 1}
            }
        };
    }

    static async getClientes(){ //metodo para listar clientes
        return await Cliente.query(); //select * from cliente
    }

    static async insert(data){ // metodo para insertar clientes
        return await Cliente.query()
        .insert(data);  // insert into cliente values
    }

    static async update(data, id){// metodo para editar cliente
        return await Cliente.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id){// metodo para eliminat Cliente
        return await Cliente.query()
        .deleteById(id); // delete from cliente whwre id = 0

    }

}

module.exports = Cliente;