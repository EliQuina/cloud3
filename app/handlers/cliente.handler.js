const Cliente = require('../models/Cliente');

// crear una funcion para llamado a select del modelo
// envia parametros req y res
// req significa request = peticion
// res significa response = respuesta
const listCliente = async(req, res) => {
    try{
        // llamado a funcion de select 
        const cliente = await Cliente.getClientes(); 
        res.json(cliente);  // parsea a json y retorna la respuesta 
    }catch (error){
        res.status(500).json({error: error.message});
    }
}
// insertar datos
const insertCliente = async(req, res) =>{
    try {
        const cliente = await Cliente.insert(req.body, req.params.is);
        res.json(cliente)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// Actualizar datos 
const updateCliente = async(req, res) =>{
    try {
        const cliente = await Cliente.update(req.body, req.params.id);
        // 200 por dafault
        res.json(cliente)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// borrar datos

const deleteCliente = async(req, res) =>{
    try {
        const cliente = await Cliente.delete(req.params.id);
        // 200 por default
        res.json(cliente)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    listCliente,
    insertCliente,
    updateCliente,
    deleteCliente
}