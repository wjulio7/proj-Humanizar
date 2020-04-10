const connection = require('../database/conection');

module.exports = { 

    async create(request, response){

        const{ name, description, value } = request.body;
        request.headers;//id vem por aqi
        
        const vendedor_id = request.headers.authorization;

        //fazendo retornar o id e inserindo
        const [id] = await connection('product').insert({
            name,
            description,
            value,
            vendedor_id
        })
        return response.json({id})
    }

}
