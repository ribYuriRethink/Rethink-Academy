import { Response } from "express";

type Livro = {
  titulo: string;
  isbn: string;
};

const showLivro = (res: Response, livros: Livro[]) => {
  res.send(livros);
};

export default { showLivro };
