const connection = require('../database/conection');
module.exports = {
    async create(request, response){
    // acessando corpo da requisição
    const {cpf, urlImgVend, imgVendName, nameVend, password, rg, email, whatsapp, city, uf} = request.body;
    await connection('vendedor').insert({
	cpf,
	urlImgVend,
	imgVendName,
	nameVend,
	password,
	rg,
	email,
	whatsapp,
	city,
	uf
    })
    //aqui serve pra retornar alguma coisa
    return response.json({nameVend})

    }
};