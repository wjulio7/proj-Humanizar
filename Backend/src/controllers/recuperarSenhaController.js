const connection = require('../database/conection');
module.exports = {
    async alter(request, response) {
        const cpf = request.headers.authorization;
        const { password } = request.body;
        const vendedor = await connection('vendedor')
            .where('cpf', cpf)
            .update('password', password)

        return response.json({ vendedor });
    }
}