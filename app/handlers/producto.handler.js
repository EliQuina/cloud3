const Producto = require('../models/Producto');

// crear una funcion para llamado a select del modelo
// envia parametros req y res
// req significa request = peticion
// res significa response = respuesta
const listProducto = async(req, res) => {
    try{
        // llamado a funcion de select 
        const producto = await Producto.getProducto(); 
        res.json(producto);  // parsea a json y retorna la respuesta 
    }catch (error){
        res.status(500).json({error: error.message});
    }
}
// insertar datos
const insertProducto = async(req, res) =>{
    try {
        const producto = await Producto.insert(req.body, req.params.is);
        res.json(producto)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// Actualizar datos 
const updateProducto = async(req, res) =>{
    try {
        const producto = await Producto.update(req.body, req.params.id);
        // 200 por dafault
        res.json(producto)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// borrar datos

const deleteProducto = async(req, res) =>{
    try {
        const producto = await Producto.delete(req.params.id);
        // 200 por default
        res.json(producto)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    listProducto,
    insertProducto,
    updateProducto,
    deleteProducto
}