
exports.up = function(knex) {
   return knex.schema.createTable('product', function(table) {
       table.increments();
       table.string('name').notNullable();
       table.string('description').notNullable();;
       table.decimal('value').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('product');
};
