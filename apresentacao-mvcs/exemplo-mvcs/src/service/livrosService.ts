import database from "../model/livrosDatabase";

type LivroDatabase = {
  id: number;
  autor: string;
  titulo: string;
  isbn: string;
};

type Livro = {
  titulo: string;
  isbn: string;
};

const pesquisarPorAutor = async (autor: string) => {
  const livro = await database.show("autor", autor);
  const livroOutput: Livro[] = livro.map((item: LivroDatabase) => ({
    titulo: item.titulo,
    isbn: item.isbn,
  }));
  return livroOutput;
};

export default { pesquisarPorAutor };
