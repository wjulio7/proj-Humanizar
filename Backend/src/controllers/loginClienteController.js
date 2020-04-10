const connection = require('../database/conection');

module.exports = {
    async create(request, response) {
        //campos preenchidos na hora do login
      const { name, password } = request.body;
  
      const cliente = await connection('cliente')
        .where('name', name)
        .where('password', password)
        .select('id')
        .first();
  
      if (!cliente) {
        return response.status(400).json({ error: 'Cliente não encontrado' });
      }
  
      return response.json(cliente);
    }
  }
  