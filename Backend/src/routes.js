const express = require('express');
const routes = express.Router();

const cadastroVendedorController = require('./controllers/cadastroVendedorController');
const loginVendedorController = require('./controllers/loginVendedorController');

routes.post('/cadastroVendedorController', cadastroVendedorController.create);

routes.post('/loginVendedorController', loginVendedorController.create);











module.exports = routes;