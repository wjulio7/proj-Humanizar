const connection = require('../database/conection');
module.exports = {
		async create(request, response){
			// acessando corpo da requisição
			const {cpf, urlImgVend, imgVendName, nameVend, password, rg, email, whatsapp, city, uf} = request.body;
			const testecpf = await connection('vendedor')
			.where('cpf', cpf)
			.select('cpf')
			.first();
			if (!testecpf ) {
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
			  }else{
				return response.status(409).json({ message: 'O CPF informado já foi cadastro.' })
            }
					}
			} 
