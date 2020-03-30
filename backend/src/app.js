const express = require('express');
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require('./routes');

/*
    Metodos HTTP:

    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/*
    Tipos de parâmetros:

    Query Params: Parâmentros nomeados enviados na rota após "?" (paginação, filtros)
    Route Params: Parâmetros utilizados para identificar recursos
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
