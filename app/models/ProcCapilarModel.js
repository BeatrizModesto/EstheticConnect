import db from '../../config/dbConnection.js';

const ProcCapilarModel = {

  async listarProcedimentos() {
    const [rows] = await db.query(
      'SELECT * FROM procedimentos_capilares'
    );

    return rows;
  },

  async listarAntesDepois() {
    const [rows] = await db.query(
      'SELECT * FROM antes_depois_capilar'
    );

    return rows;
  }

};

export default ProcCapilarModel;