import { getCarousel, getDescricao, addAgendamentoModel } from "../models/home.js";
import Joi from "joi";

export async function home(req, res) {
  try {
    const carousel = await getCarousel();
    const descricao = await getDescricao();

    res.render("home.ejs", {
      carousel,
      descricao
    });

  } catch (error) {
    console.log("Erro:", error);
    res.status(500).send("Erro");
  }
}


export async function addAgendamento(req, res) {

  const { error } = schema.validate(req.body);

  if (error) {
    return res.render('agendamento.ejs', {
      agendamento: req.body,
      errors: error.details
    });
  }

  try {
    await addAgendamentoModel(req.body);
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.status(500).send("Erro");
  }
}

const schema = Joi.object({
  nome_agendamento: Joi.string().min(5).max(100).required(),
  email_agendamento: Joi.string().email().required(),
  telefone_agendamento: Joi.string().min(10).max(15).required(),
  tipo: Joi.string().required(),
  data_desejada: Joi.date().required(),
});
