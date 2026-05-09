import{addDuvidaModel, listarProfissionais}  from "../models/Profissionais.js";
import Joi from "joi";

export async function getProfissionais(req, res) {
  try {
    const profissionais = await listarProfissionais();
    res.render('Profissionais.ejs', { profissionais });
    } catch (erro) {
      console.error(erro);
      res.status(500).send('Erro ao carregar profissionais');
    }
}


export async function getDuvida(req, res) {
  try {
    await addDuvidaModel(req.body);

    res.redirect('/profissionais');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao salvar dúvida');
  }
}
