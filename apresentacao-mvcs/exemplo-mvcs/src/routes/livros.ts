import { Router } from "express";
import livrosController from "../controller/livrosController";

const router = Router();

router.get("/:autor", livrosController.show);

export { router };
