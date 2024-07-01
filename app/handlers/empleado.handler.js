const Empleado = require('../models/Empleado');

// crear una funcion para llamado a select del modelo
// envia parametros req y res
// req significa request = peticion
// res significa response = respuesta
const listEmpleado = async(req, res) => {
    try{
        // llamado a funcion de select 
        const empleado = await Empleado.getEmpleados(); 
        res.json(empleado);  // parsea a json y retorna la respuesta 
    }catch (error){
        res.status(500).json({error: error.message});
    }
}
// insertar datos
const insertEmpleado = async(req, res) =>{
    try {
        const empleado = await Empleado.insert(req.body, req.params.is);
        res.json(empleado)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// Actualizar datos 
const updateEmpleado = async(req, res) =>{
    try {
        const empleado = await Empleado.update(req.body, req.params.id);
        // 200 por dafault
        res.json(empleado)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// borrar datos

const deleteEmpleado = async(req, res) =>{
    try {
        const empleado = await Empleado.delete(req.params.id);
        // 200 por default
        res.json(empleado)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    listEmpleado,
    insertEmpleado,
    updateEmpleado,
    deleteEmpleado
}