const express = require('express');
const routes = express.Router();

const loginVendedorController = require('./controllers/loginVendedorController');
const cadastroVendedorController = require('./controllers/cadastroVendedorController');
const vendedorController = require('./controllers/vendedorController')

const produtoController = require('./controllers/produtoController');
const produtoClienteController = require('./controllers/produtoClienteController')

const recuperarSenhaController = require('./controllers/recuperarSenhaController')
routes.post('/recuperarsenhacontroller', recuperarSenhaController.alter)

routes.post('/cadastroVendedorController', cadastroVendedorController.create);

routes.post('/loginVendedorController', loginVendedorController.create);
routes.put('/alterasenha/:id', vendedorController.update);

routes.get('/produtoslistar', produtoController.index);
routes.post('/produtoController', produtoController.create);
routes.delete('/produtos/:id', produtoController.delete);

routes.get('/produtoclientecontroller', produtoClienteController.index);

//routes.get('/vendedorinfo', vendedorController.index);
routes.post('/vendedorinfoalter', vendedorController.alter);

//routes.post('/esqueci', loginVendedorController);



module.exports = routes;