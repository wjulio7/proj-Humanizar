const connection = require('../database/conection');
module.exports = {
    async create(request, response){
    // acessando corpo da requisição
    const {name,
    password,
    cpf,
	email,
	whatsapp,
	city,
	uf
    } = request.body;
    await connection('cliente').insert({
        name,
	password,
	cpf,
	email,
	whatsapp,
	city,
	uf
    })
    //aqui serve pra retornar alguma coisa
    return response.json({})

    }
};