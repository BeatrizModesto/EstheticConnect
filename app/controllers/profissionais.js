import { addDuvidaModel, listarProfissionais } from "../models/Profissionais.js";
import Joi from "joi";

export async function getProfissionais(req, res) {
  try {
    const profissionais = await listarProfissionais();

    res.render('profissionais.ejs', {
      profissionais,
      sucesso: false
    });

  } catch (erro) {
    console.error(erro);
    res.status(500).send('Erro ao carregar a lista de profissionais:');
  }
}

export async function getDuvida(req, res) {

  const { error } = schema.validate(req.body);

  if (error) {
    const profissionais = await listarProfissionais();

    return res.render("Profissionais.ejs", {
      profissionais,
      errors: error.details
    });
  }

  try {
    await addDuvidaModel(req.body);

    const profissionais = await listarProfissionais();

    res.render("profissionais.ejs", {
      profissionais,
      sucesso: true
    });

  } catch (erro) {
    console.error("Erro ao salvar a dúvida do usuário:", erro);

    res.status(500).send(
      "Não foi possível enviar sua dúvida no momento. Tente novamente mais tarde."
    );
  }
}

const schema = Joi.object({
  nome_completo: Joi.string().min(5).max(150).required(),
  email: Joi.string().email().required(),
  telefone: Joi.string().min(10).max(20).required(),
  duvida: Joi.string().min(5).required(),
});
