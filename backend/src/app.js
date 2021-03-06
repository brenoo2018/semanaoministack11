const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const {errors} = require('celebrate')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
//GET: Buscar informações no backend
//POST: Criar informações no backend
//PUT: Alterar uma informação no backend
//DELETE: Deletarinformações no backend
*/

/**
 * Tipos de parâmetros
 * 
 * Query: parâmetros nomeados enviados na rota após "?"(filtros, paginação)
 * Route: parâmetros utilizados para identificar recursos
 * Body: corpo da requisião , criar ou alterar recursos
 */

module.exports = app;