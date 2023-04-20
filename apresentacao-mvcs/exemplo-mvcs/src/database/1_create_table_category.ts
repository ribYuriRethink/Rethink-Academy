import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("livros", function (table) {
    table.increments();
    table.string("isbn").notNullable();
    table.string("autor").notNullable();
    table.string("titulo").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("livros");
}
