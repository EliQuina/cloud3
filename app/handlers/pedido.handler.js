const Pedido = require('../models/Pedido');

// crear una funcion para llamado a select del modelo
// envia parametros req y res
// req significa request = peticion
// res significa response = respuesta
const listPedido = async(req, res) => {
    try{
        // llamado a funcion de select 
        const pedido = await Pedido.getPedidos(); 
        res.json(pedido);  // parsea a json y retorna la respuesta 
    }catch (error){
        res.status(500).json({error: error.message});
    }
}
// insertar datos
const insertPedido = async(req, res) =>{
    try {
        const pedido = await Pedido.insert(req.body, req.params.is);
        res.json(pedido)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// Actualizar datos 
const updatePedido = async(req, res) =>{
    try {
        const pedido = await Pedido.update(req.body, req.params.id);
        // 200 por dafault
        res.json(pedido)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

// borrar datos

const deletePedido = async(req, res) =>{
    try {
        const pedido = await Pedido.delete(req.params.id);
        // 200 por default
        res.json(pedido)
    }catch (error){
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    listPedido,
    insertPedido,
    updatePedido,
    deletePedido
}