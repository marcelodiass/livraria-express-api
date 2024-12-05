import express from "express";
import conectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectDatabase();

conexao.on("error", (error) => {
    console.error("Erro de conexão.", error);
})

conexao.once("open", () => {
    console.log("Conectado no banco com sucesso.")
})

const app = express();
routes(app);

app.get("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    res.status(200).json(livros[index]);
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro criado com sucesso!");
})

app.put("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index]);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso!");
})

export default app;

