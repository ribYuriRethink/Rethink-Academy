import knex from "knex";
import config from "./knexfile";

const knexInstace = knex(config);

const data = [
  { author: "Valente", title: "Engenharia de Software Moderna", isbn: "1" },
  { author: "Julio Verne", title: "Viagem ao centro da Terra", isbn: "2" },
  { author: "JK Rolling", title: "Harry Potter", isbn: "2" },
  { author: "Tolkien", title: "Senhor dos Anéis", isbn: "4" },
  { author: "Tolkien", title: "O Hobbit", isbn: "4" },
];

const insertOnLivros = async (data: any[]) => {
  await knexInstace("books").insert(data);
  console.log("Books success!");
};

insertOnLivros(data)
  .then(() => console.log("Database populate terminated!"))
  .then(() => process.exit());

// no terminal -> ts-node seeds.ts || npx ts-node seeds.ts
