
exports.up = function(knex) {
    return knex.schema.createTable('vendedor', function (table) {
        table.increments();//chave primaria autoincrement
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.integer('cpf').notNullable();
        table.integer('rg').notNullable();
        table.string('email').notNullable();
        table.integer('whatsapp');
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vendedor');
};