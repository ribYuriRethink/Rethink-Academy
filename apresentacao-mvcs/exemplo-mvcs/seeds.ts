import knex from "knex";
import config from "./knexfile";

const knexInstace = knex(config);

const data = [
  { autor: "Valente", titulo: "Engenharia de Software Moderna", isbn: "1" },
  { autor: "Julio Verne", titulo: "Viagem ao centro da Terra", isbn: "2" },
  { autor: "JK Rolling", titulo: "Harry Potter", isbn: "2" },
  { autor: "Tolkien", titulo: "Senhor dos Anéis", isbn: "4" },
  { autor: "Tolkien", titulo: "O Hobbit", isbn: "4" },
];

const insertOnLivros = async (data: any[]) => {
  await knexInstace("livros").insert(data);
  console.log("Livros success!");
};

insertOnLivros(data)
  .then(() => console.log("Database populate terminated!"))
  .then(() => process.exit());

// no terminal -> ts-node seeds.ts || npx ts-node seeds.ts
