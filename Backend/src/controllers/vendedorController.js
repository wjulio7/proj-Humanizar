const connection = require('../database/conection');
module.exports = {
    async index(request, response) {

        const vendedor = await connection('vendedor')
            .select([
                'vendedor.urlImgVend'
            ]);
        return response.json(vendedor);
    },

    async alter(request, response) {
        const { url, imgVendName } = request.body;
        const cpf = request.headers.authorization;

        const vendedor = await connection('vendedor')
            .where('cpf', cpf)
            .update('urlImgVend', url)
            .update('imgVendName', imgVendName)
        return response.json({ vendedor });
    },

    async update(request, response, next) {
        //const { mail } = req.body;
        try {
          const { cpf } = request.params
          const { password } = request.body
    
          await connection('vendedor')
            .where('cpf', cpf)
            .select('password')
            .update('password', password)
    
          //return response.send();
    
    
        } catch (err) {
          response.status(400).send({ error: 'erro ao alterar a senha, tente novamente' })
          next(err)
        }
        //await connection('vendedor').where('cpf', cpf).update();
      }
}
