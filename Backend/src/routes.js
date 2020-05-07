const express = require('express');
const routes = express.Router();

const multer  = require('multer');


const cadastroVendedorController = require('./controllers/cadastroVendedorController');
const cadastroClienteController = require('./controllers/cadastroClienteController');

const loginVendedorController = require('./controllers/loginVendedorController');
const loginClienteController = require('./controllers/loginClienteController');

const produtoController = require('./controllers/produtoController');

const upload = multer({ dest: 'uploads/' });

routes.post('/cadastroVendedorController', cadastroVendedorController.create);
routes.post('/cadastroClienteController', cadastroClienteController.create);

routes.post('/loginVendedorController', loginVendedorController.create);
routes.post('/loginClienteController', loginClienteController.create);

routes.get('/produtoslistar', produtoController.index);
routes.post('/produtoController', upload.single('image'), produtoController.create);
routes.delete('/produto/:id', produtoController.delete);











module.exports = routes;