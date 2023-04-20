import { Router } from "express";
import { router as books } from "./books";

const router = Router();

router.use("/livros", books);

export { router };
