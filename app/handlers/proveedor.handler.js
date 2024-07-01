const Proveedor = require('../models/Proveedor');

// crear una funcion para llamado a select del modelo
// envia parametros req y res
// req significa request = peticion
// res significa response = respuesta
const listProveedor = async(req, res) => {
    try{
        // llamado a funcion de select 
        const proveedor = await Proveedor.getProveedores(); 
        res.json(proveedor);  // parsea a json y retorna la respuesta 
    }catch (error){
        res.status(500).json({error: error.message});
    }
}
// insertar datos
const insertProveedor = async(req, res) =>{
    try {
        const proveedor = await Proveedor.insert(req.body, req.params.is);
        res.json(proveedor)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// Actualizar datos 
const updateProveedor = async(req, res) =>{
    try {
        const proveedor = await Proveedor.update(req.body, req.params.id);
        // 200 por dafault
        res.json(proveedor)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// borrar datos

const deleteProveedor = async(req, res) =>{
    try {
        const proveedor = await Proveedor.delete(req.params.id);
        // 200 por default
        res.json(proveedor)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    listProveedor,
    insertProveedor,
    updateProveedor,
    deleteProveedor
}