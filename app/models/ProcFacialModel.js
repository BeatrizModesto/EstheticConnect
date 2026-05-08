import db from '../../config/dbConnection.js';

const ProcFacialModel = {

  async listarProcedimentos() {
    const [rows] = await db.query('SELECT * FROM procedimento_facial');
    return rows;
  },

  async listarAntesDepois() {
    const [rows] = await db.query('SELECT * FROM antes_depois_facial');
    return rows;
  }

};

export default ProcFacialModel;