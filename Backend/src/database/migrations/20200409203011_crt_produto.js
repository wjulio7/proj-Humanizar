
exports.up = function (knex) {
    return knex.schema.createTable('product', function (table) {
        table.increments();
        table.string('nameProd').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('imgProdName').notNullable();
        table.string('urlImgProd').notNullable();
        table.string('categoriaProd').notNullable();
        table.string('vendedor_id').notNullable();

        table.foreign('vendedor_id').references('cpf').inTable('vendedor');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('product');
};
