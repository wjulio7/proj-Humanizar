const connection = require('../database/conection');

module.exports = {
    async create(request, response) {
        //campos preenchidos na hora do login
      const { cpf, password } = request.body;
  
      const vendedor = await connection('vendedor')
        .where('cpf', cpf)
        .where('password', password)
        .select('nameVend','urlImgVend','imgVendName')
        .first();
  
      if (!vendedor) {
        return response.status(400).json({ message: 'Falha ao efetuar Login, cheque suas informaçoes' });
      }
     
      return response.json(vendedor);
    }
  }
  