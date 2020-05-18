const connection = require('../database/conection');

module.exports = {
    async index(request, response){
        const{page = 1} = request.query
        const [count] = await connection('product').count();
        //const vendedor_id = request.headers.authorization;
        const product = await connection('product')
        //fazendo join pra puxar os campos da ong juntamente com incidents//
        .join('vendedor','vendedor.cpf','=','product.vendedor_id')
        
        .offset((page -1 ) *5)
        .select([
            'product.*',
            'vendedor.nameVend',
            'vendedor.urlImgVend',
            'vendedor.cpf',
            'vendedor.email',
            'vendedor.whatsapp',
            'vendedor.city',
            'vendedor.uf'
        ]);
        response.header('X-Total-Count', count['count(*)'])
        return response.json(product);
    }
}
