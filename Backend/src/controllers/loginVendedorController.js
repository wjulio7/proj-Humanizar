const connection = require('../database/conection');

module.exports = {
    async create(request, response) {
        //campos preenchidos na hora do login
      const { name, password } = request.body;
  
      const vendedor = await connection('vendedor')
        .where('name', name)
        .where('password', password)
        .select('id')
        .first();
  
      if (!vendedor) {
        return response.status(400).json({ error: 'vendedor não encontrado' });
      }
  
      return response.json(vendedor);
    }
  }
  