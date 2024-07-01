const express = require('express'); //llamado a framework

// llamar a handlers del api de cliente
const clienteHandler = require('./app/handlers/cliente.handler');
//llamar a handlers del api de prodcuto
const productoHandler = require('./app/handlers/producto.handler');
//llamar a handlers del api de Pedido
const pedidoHandler = require('./app/handlers/pedido.handler');

//llamar a handlers del api de Empleado
const empleadoHandler = require('./app/handlers/empleado.handler');

//llamar a handlers del api de Empleado
const proveedorHandler = require('./app/handlers/proveedor.handler');

//variable para encapsular rutas
const router = express.Router();

//registrar las rutas
//comenzamos con las rutas del cliente
router.get('/clientes', clienteHandler.listCliente)//Para obtener cliente
router.post('/clientes', clienteHandler.insertCliente)//Para insertar cliente
router.patch('/clientes/:id', clienteHandler.updateCliente)// Para actualiozar cliente
router.delete('/clientes/:id', clienteHandler.deleteCliente)// Para eliminar cliente

//comenzamos con las rutas del productos
router.get('/productos', productoHandler.listProducto)//Para obtener producto
router.post('/productos', productoHandler.insertProducto)//Para insertar producto
router.patch('/productos/:id', productoHandler.updateProducto)// Para actualiozar producto
router.delete('/productos/:id', productoHandler.deleteProducto)// Para eliminar producto

//comenzamos con las rutas del pedido
router.get('/pedidos', pedidoHandler.listPedido)//Para obtener pedido
router.post('/pedidos', pedidoHandler.insertPedido)//Para insertar pedido
router.patch('/pedidos/:id', pedidoHandler.updatePedido)// Para actualiozar pedido
router.delete('/pedidos/:id', pedidoHandler.deletePedido)// Para eliminar pedido

//comenzamos con las rutas del Empleado
router.get('/empleados', empleadoHandler.listEmpleado)//Para obtener pedido
router.post('/empleados', empleadoHandler.insertEmpleado)//Para insertar pedido
router.patch('/empleados/:id', empleadoHandler.updateEmpleado)// Para actualiozar pedido
router.delete('/empleados/:id', empleadoHandler.deleteEmpleado)// Para eliminar pedido

//comenzamos con las rutas del Proveedor
router.get('/proveedores', proveedorHandler.listProveedor)//Para obtener pedido
router.post('/proveedores', proveedorHandler.insertProveedor)//Para insertar pedido
router.patch('/proveedores/:id', proveedorHandler.updateProveedor)// Para actualiozar pedido
router.delete('/proveedores/:id', proveedorHandler.deleteProveedor)// Para eliminar pedido

//otras rutas..
module.exports = router;