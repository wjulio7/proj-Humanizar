const express = require('express');
const routes = express.Router();

const cadastroVendedorController = require('./controllers/cadastroVendedorController');

routes.post('/cadastroVendedorController', cadastroVendedorController.create);











module.exports = routes;