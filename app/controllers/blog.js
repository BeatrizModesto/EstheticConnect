import { listarPost } from "../models/Blog.js";

export const getPost = async (req, res) => {
  try {
    const blog = await listarPost();

    res.render("blog", { blog });

  } catch (erro) {
    console.error("Erro ao carregar os posts do blog:", erro);

    res.status(500).send(
      "Ocorreu um erro ao carregar os posts do blog. Tente novamente mais tarde."
    );
  }
};