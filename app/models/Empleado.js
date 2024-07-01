const { format } = require('mysql2');
const { Model } = require('objection'); //llamar a Model de la lob objection

class Empleado extends Model { //creo herencia de Model
    static get tableName(){
        return 'empleado';
    }

    static get jsonSchema() { // Especifica la estructura de la tabla
        return {
            type: 'object', // object para un daroa, array para una lista
            required: ['nombre', 'cargo'], // campos requeridos 

            properties: {// estructura de los campos 
                id: { type: 'integer'},
                nombre: {type: 'string', minLength: 1},
                apellido: {type: 'string', minLength: 1},
                cargo: {type: 'string'},
                salario: {type: 'decimal'},
                fechacontrato: {type: 'string', format: 'date-time'},
                telefono: {type: 'string'},
                correo: {type: 'string', format: 'email'}
            }
        };
    }

    static async getEmpleados(){ //metodo para listar Empleados
        return await Empleado.query(); //select * from Empleado
    }

    static async insert(data){ // metodo para insertar Empleados
        return await Empleado.query()
        .insert(data);  // insert into Empleado values
    }

    static async update(data, id){// metodo para editar Empleado
        return await Empleado.query()
        .patch(id, data); // update set data where id = 0
    }

    static async delete(id){// metodo para eliminat Empleado
        return await Empleado.query()
        .deleteById(id); // delete from Empleado whwre id = 0

    }

}

module.exports = Empleado;