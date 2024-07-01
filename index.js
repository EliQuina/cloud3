// importar librerias 
 const express = require('express');

 // llamada a conf de db
 const knex = require('./db');

 //llamada rutas
 const routes = require ('./routes');

 const app = express(); // creamod una nueva instanacia
 const port = 3000; // puerto de salida 

 // configuracion para que funcione
// configuracion para decir que tipo de dato vamos a utilizar 
 app.use(express.json()); // configurar tipo de dato json 

 app.use('/api', routes); //configura la url base y rutas 

 app.listen(port, () => { //ejecuta la api por el puerto 3000
    //luego ejecutar imprime un mensaje
    console.log(`Servidor corriendo en el puerto ${port}`)
    
    
 })