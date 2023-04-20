import { Router } from "express";
import booksController from "../controller/booksController";

const router = Router();

router.get("/:author", booksController.show);

export { router };
