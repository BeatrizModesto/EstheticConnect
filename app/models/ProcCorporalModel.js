import db from '../../config/dbConnection.js';

const ProcCorporalModel = {

  async listarProcedimentos() {

    const [rows] = await db.query(`
      SELECT * FROM procedimentos_corporais
    `);

    return rows;
  },

  async listarAntesDepois() {

    const [rows] = await db.query(`
      SELECT * FROM antes_depois_corporais
    `);

    return rows;
  }

};

export default ProcCorporalModel;