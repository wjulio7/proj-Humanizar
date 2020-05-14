const connection = require('../database/conection');

module.exports = {

    async index(request, response){

        const vendedor = await connection('vendedor')
            .select([

                'vendedor.url'
            ]);

        return response.json(vendedor);
    },



async alter(request, response) {
    const {  url, imgVendName } = request.body;
    const cpf = request.headers.authorization;

    const vendedor = await connection('vendedor')
        .where('cpf', cpf)
        .update('url',url)
        .update('imgVendName',imgVendName)
    return response.json({ vendedor });
}
}