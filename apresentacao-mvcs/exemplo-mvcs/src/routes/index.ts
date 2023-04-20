import { Router } from "express";
import { router as livros } from "./livros";

const router = Router();

router.use("/livros", livros);

export { router };
