const express = require('express');
const routes = express.Router();

const loginVendedorController = require('./controllers/loginVendedorController');
const cadastroVendedorController = require('./controllers/cadastroVendedorController');
const vendedorController = require('./controllers/vendedorController')


const produtoController = require('./controllers/ProdutoController')

//const produtoClienteController = require('./controllers/produtoClienteController')
const produtoClienteController = require('./controllers/produtoClienteController')
routes.get('/produtoclientecontroller', produtoClienteController.index);

const alterarSenhaController = require('./controllers/alterarSenhaController')
routes.post('/alterarsenhacontroller', alterarSenhaController.alter)

routes.post('/cadastroVendedorController', cadastroVendedorController.create);

routes.post('/loginVendedorController', loginVendedorController.create);

routes.get('/produtoslistar', produtoController.index);
routes.post('/produtoController', produtoController.create);
routes.delete('/produtos/:id', produtoController.delete);

//routes.get('/vendedorinfo', vendedorController.index);
routes.post('/vendedorinfoalter', vendedorController.alter);

//routes.post('/esqueci', loginVendedorController);



module.exports = routes;