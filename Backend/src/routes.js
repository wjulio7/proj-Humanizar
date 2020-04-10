const express = require('express');
const routes = express.Router();

const cadastroVendedorController = require('./controllers/cadastroVendedorController');
const cadastroClienteController = require('./controllers/cadastroClienteController');

const loginVendedorController = require('./controllers/loginVendedorController');
const loginClienteController = require('./controllers/loginClienteController');

const produtoController = require('./controllers/produtoController')

routes.post('/cadastroVendedorController', cadastroVendedorController.create);
routes.post('/cadastroClienteController', cadastroClienteController.create);

routes.post('/loginVendedorController', loginVendedorController.create);
routes.post('/loginClienteController', loginClienteController.create);

routes.post('/produtoController', produtoController.create);








module.exports = routes;