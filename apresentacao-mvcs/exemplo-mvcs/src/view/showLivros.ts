import { Response } from "express";

type Book = {
  title: string;
  isbn: string;
};

const showLivro = (res: Response, books: Book[]) => {
  res.send(books);
};

export default { showLivro };
