import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config);

const show = async (column: string, value: string) => {
  try {
    const obj = {
      [column]: value,
    };
    const result: any = await knexInstance("books").select("*").where(obj);
    return result;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default { show };
