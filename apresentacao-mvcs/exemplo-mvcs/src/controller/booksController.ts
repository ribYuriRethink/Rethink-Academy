import { Request, Response } from "express";
import booksService from "../service/booksService";
import viewBooks from "../view/showLivros";

const show = async (req: Request, res: Response) => {
  try {
    const author = req.params.author;
    const books = await booksService.searchByAuthor(author);
    viewBooks.showLivro(res, books);
  } catch (error: any) {
    res.send(error.message);
  }
};

export default { show };
