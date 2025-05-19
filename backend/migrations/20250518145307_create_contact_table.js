exports.up = function(knex) {
  return knex.schema.createTable('contact', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.text('message').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('contact');
};
