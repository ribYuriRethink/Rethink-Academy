import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

const show = async (column: string, autor: string) => {
  try {
    const obj = {
      [column]: autor,
    };
    const result: any = await knexInstance("livros").select("*").where(obj);
    return result;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default { show };
