import { listarPost } from "../models/Blog.js";

export const getPost = async (req, res) => {
  try {
    const blog = await listarPost();

    res.render("blog", { blog });

  } catch (erro) {
    console.error(erro);
    res.status(500).send("Erro");
  }
};