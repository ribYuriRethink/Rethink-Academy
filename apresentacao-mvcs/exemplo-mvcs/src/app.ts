import express from "express";
import { router } from "./routes/index";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/api", router);

app.get("/", (_req, res) => {
  res.send("API Livros");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
