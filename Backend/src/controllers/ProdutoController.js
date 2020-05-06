const connection = require('../database/conection');

module.exports = {
    async index(request, response){
        const{page = 1} = request.query
        
        const [count] = await connection('product').count();
        
        const product = await connection('product')
        //fazendo join pra puxar os campos da ong juntamente com incidents
        .join('vendedor','vendedor.cpf','=','product.vendedor_id')
        .limit(5)
        .offset((page -1 ) *5)
        .select([
            'product.*',
            'vendedor.name',
            'vendedor.email',
            'vendedor.whatsapp',
            'vendedor.city',
            'vendedor.uf'
        ]);
        response.header('X-Total-Count', count['count(*)'])
        return response.json(product);
    },
    


    async create(request, response) {
        const { name, description, value } = request.body;
        request.headers;

        const vendedor_id = request.headers.authorization;

        const [id] = await connection('product').insert({
            name,
            description,
            value,
            vendedor_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const vendedor_id = request.headers.authorization;

        const product = await connection('product')
            .where('id', id)
            .select('vendedor_id')
            .first();

        if (product.vendedor_id != vendedor_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('product').where('id', id).delete();

        return response.status(204).send();
    }
}//teste