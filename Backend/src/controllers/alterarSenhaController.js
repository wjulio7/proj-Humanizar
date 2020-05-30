const connection = require('../database/conection');
module.exports = {
   /* async alter(request, response) {
        const cpf = request.headers.authorization;
        const { password } = request.body;
        const vendedor = await connection('vendedor')
            .where('cpf', cpf)
            .update('password', password)

        return response.json({ vendedor });
    }*/
    async alter(request, response, next) {
        try {
          //const  cpf  = request.headers.authorization;
         // const  rg = request.headers.authorization2;
          
          const { cpf, rg, password } = request.body;

          const vendedor = await connection('vendedor')
            .where('cpf', cpf)
            .where('rg', rg)
            .update('password', password)

          return response.json({vendedor});


        } catch (err) {
          response.status(400).send({ error: 'erro ao alterar a senha, tente novamente' })
          next(err)
        }
      }
}