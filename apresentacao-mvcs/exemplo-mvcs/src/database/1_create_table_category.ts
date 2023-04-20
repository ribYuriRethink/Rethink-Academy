import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("books", function (table) {
    table.increments();
    table.string("isbn").notNullable();
    table.string("author").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("books");
}
