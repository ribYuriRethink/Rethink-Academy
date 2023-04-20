import { Request, Response } from "express";
import livrosService from "../service/livrosService";
import viewLivros from "../view/showLivros";

const show = async (req: Request, res: Response) => {
  try {
    const autor = req.params.autor;
    const livros = await livrosService.pesquisarPorAutor(autor);
    viewLivros.showLivro(res, livros);
  } catch (error: any) {
    res.send(error.message);
  }
};

export default { show };
