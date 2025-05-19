// migrations/xxxx_create_reviews.js
exports.up = function(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id').primary();
    table.integer('product_id').notNullable();
    table.string('reviewer_name').notNullable();
    table.integer('rating').notNullable(); // e.g., 1 to 5
    table.text('comment');
    table.timestamps(true, true);

    // Optional: Foreign key constraint if you want (ensure products table exists)
    // table.foreign('product_id').references('products.id').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews');
};
