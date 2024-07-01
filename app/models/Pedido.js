const { format } = require('mysql2');
const { Model } = require('objection'); //llamar a Model de la lob objection

class Pedido extends Model { //creo herencia de Model
    static get tableName(){
        return 'pedido';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un daroa, array para una lista
            required: ['fecha', 'monto'], // campos requeridos 

            properties: {// estructura de los campos 
                id: { type: 'integer'},
                fecha: {type: 'string', format: 'date-time'},
                fecha: {type: 'decimal'},
                estado: {type: 'string'},
                total: {type: 'string'},
                direccion: {type: 'integer'},
                deCliente: {type: 'integer',ForeignKey: "Cliente"},
                deEmpleado: {type: 'integer', ForeignKey: "Empleado"}
            }
        };
    }

    static async getPedidos(){ //metodo para listar Pedidos
        return await Pedido.query(); //select * from Pedido
    }

    static async insert(data){ // metodo para insertar Pedidos
        return await Pedido.query()
        .insert(data);  // insert into Pedido values
    }

    static async update(data, id){// metodo para editar Pedido
        return await Pedido.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id){// metodo para eliminat Pedido
        return await Pedido.query()
        .deleteById(id); // delete from Pedido whwre id = 0

    }

}

module.exports = Pedido;