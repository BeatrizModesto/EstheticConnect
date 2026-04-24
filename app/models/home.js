import db from "../../config/dbConnection.js";

export async function getCarousel() {
  const [rows] = await db.execute("SELECT * FROM carousel");
  return rows;
}

export async function getDescricao() {
  const [rows] = await db.execute("SELECT * FROM descricao");
  return rows;
}

export async function addAgendamentoModel(agendamento) {
  const query = `
    INSERT INTO agendamento 
    (nome_agendamento, email_agendamento, telefone_agendamento, tipo, data_desejada) 
    VALUES (?, ?, ?, ?, ?)
  `;

  const [rows] = await db.execute(query, [
    agendamento.nome_agendamento,
    agendamento.email_agendamento,
    agendamento.telefone_agendamento,
    agendamento.tipo,
    agendamento.data_desejada
  ]);

  return rows;
}

export async function listarProfissionais() {
  const [rows] = await db.query('SELECT * FROM profissionais');
  return rows;
}


export async function addDuvidaModel(duvida) {
  const query = `
    INSERT INTO formulario_duvidas
    (nome_completo, email, telefone, duvida)
    VALUES (?, ?, ?, ?)
  `;

  const [rows] = await db.execute(query, [
    duvida.nome_completo,
    duvida.email,
    duvida.telefone,
    duvida.duvida
  ]);

  return rows;
}