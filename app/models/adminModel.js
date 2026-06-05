import db from '../../config/dbConnection.js';

const AdminModel = {

  async listarAgendamentos() {
    const [rows] = await db.execute(
      'SELECT * FROM agendamento ORDER BY data_desejada'
    );
    return rows;
  },

  async listarDuvidas() {
    const [rows] = await db.execute(
      'SELECT * FROM formulario_duvidas ORDER BY id DESC'
    );
    return rows;
  },

  async excluirAgendamento(id) {
    await db.execute(
      'DELETE FROM agendamento WHERE id = ?',
      [id]
    );
  },

  async excluirDuvida(id) {
    await db.execute(
      'DELETE FROM formulario_duvidas WHERE id = ?',
      [id]
    );
  },

  async atualizarAgendamento(id, dados) {
    await db.execute(`
      UPDATE agendamento
      SET nome_agendamento = ?,
          email_agendamento = ?,
          telefone_agendamento = ?,
          tipo = ?,
          data_desejada = ?
      WHERE id = ?
    `, [
      dados.nome_agendamento,
      dados.email_agendamento,
      dados.telefone_agendamento,
      dados.tipo,
      dados.data_desejada,
      id
    ]);
  },

  async atualizarDuvida(id, dados) {
    await db.execute(`
      UPDATE formulario_duvidas
      SET nome_completo = ?,
          email = ?,
          telefone = ?,
          duvida = ?
      WHERE id = ?
    `, [
      dados.nome_completo,
      dados.email,
      dados.telefone,
      dados.duvida,
      id
    ]);
  }

};

export default AdminModel;