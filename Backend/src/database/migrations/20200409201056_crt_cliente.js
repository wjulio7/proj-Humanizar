
exports.up = function(knex) {
    return knex.schema.createTable('cliente', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.integer('cpf');
        table.string('email').notNullable();
        table.integer('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
};
