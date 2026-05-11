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

  const { error } = schema.validate(req.body);
    if (error) {
    return res.render('profissionais.ejs', {
      agendamento: req.body,
      errors: error.details
    });

   }

  try {
    await addDuvidaModel(req.body);

    res.redirect('/profissionais');
  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao salvar dúvida');
  }
}

const schema = Joi.object({
  nome_completo: Joi.string().min(5).max(150).required(),
  email: Joi.string().email().required(),
  telefone: Joi.string().min(10).max(20).required(),
  duvida: Joi.string().min(5).required(),
});

