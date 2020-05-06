const connection = require('../database/conection');

module.exports = {
    async index(request, response) {
        const product = await connection('product').select('*');

        return response.json(product)
    },


    async create(request, response) {
        const { name, image, description, value } = request.body;
        request.headers;

        const vendedor_id = request.headers.authorization;

        const [id] = await connection('product').insert({
            name,
            image,
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