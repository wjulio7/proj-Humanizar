const express = require('express');
const routes = express.Router();

const cadastroVendedorController = require('./controllers/cadastroVendedorController');

const loginVendedorController = require('./controllers/loginVendedorController');

const produtoController = require('./controllers/produtoController');

const vendedorController = require('./controllers/vendedorController')

routes.post('/cadastroVendedorController', cadastroVendedorController.create);

routes.post('/loginVendedorController', loginVendedorController.create);

routes.get('/produtoslistar', produtoController.index);
routes.post('/produtoController', produtoController.create);
routes.delete('/produtos/:id', produtoController.delete);

//routes.get('/vendedorinfo', vendedorController.index);
routes.post('/vendedorinfoalter', vendedorController.alter);










module.exports = routes;