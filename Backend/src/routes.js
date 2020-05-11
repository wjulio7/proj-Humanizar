const express = require('express');
const routes = express.Router();

const multer = require('multer');
const path = require('path');


const cadastroVendedorController = require('./controllers/cadastroVendedorController');
const cadastroClienteController = require('./controllers/cadastroClienteController');

const loginVendedorController = require('./controllers/loginVendedorController');
const loginClienteController = require('./controllers/loginClienteController');

const produtoController = require('./controllers/produtoController');

//upload com nome da imagem
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    // nome do arquivo-data em milisegundos- extensão do arquivo
    cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  limits: {
    //valor da imagem em bytes/ imagem limitada a 5 MB
    fileSize: 1024 * 1024 * 5
  },
  //fileFilter: fileFilter
});

// filtro de tipo de  imagens que poderam ter postadas
fileFilter: (req, file, cb) => {
  const allowedMimes = [
    "image/jpeg",
    "image/pjpeg",
    "image/png",
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type."));
  }
}


//const upload = multer({ dest: 'uploads/' });

routes.post('/cadastroVendedorController', cadastroVendedorController.create);
routes.post('/cadastroClienteController', cadastroClienteController.create);

routes.post('/loginVendedorController', loginVendedorController.create);
routes.post('/loginClienteController', loginClienteController.create);

routes.get('/produtoslistar', produtoController.index);
routes.post('/produtoController', upload.single('image'), produtoController.create);
routes.delete('/produto/:id', produtoController.delete);











module.exports = routes;