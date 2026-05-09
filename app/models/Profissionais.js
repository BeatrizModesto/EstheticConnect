import db from '../../config/dbConnection.js';


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
