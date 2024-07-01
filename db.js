const Knex = require('knex') // LLamando a la libreria knex
const { Model } = require('objection') //LLamada a model de objection
const knexConfig = require('./knexfile')//LLamada a configuracion

const knex = Knex(knexConfig.development); //Inicializar el objeto
Model.knex(knex); //configurar objection 

module.exports = knex; //export configuracion