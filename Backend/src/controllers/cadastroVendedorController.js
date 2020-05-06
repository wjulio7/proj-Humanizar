const connection = require('../database/conection');
module.exports = {
    async create(request, response){
    // acessando corpo da requisição
    const {name,
	password,
	cpf,
	rg,
	email,
	whatsapp,
	city,
	uf,
	image
    } = request.body;
    await connection('vendedor').insert({
    name,
	password,
	cpf,
	rg,
	email,
	whatsapp,
	city,
	uf,
	image
    })
    //aqui serve pra retornar alguma coisa
    return response.json({name})

    }
};