import db from '../../config/dbConnection.js';

const OutrosServicosModel = {

  async listarServicos() {

    const [rows] = await db.query(
      'SELECT * FROM outros_servicos'
    );

    return rows;
  },

  async listarAntesDepois() {

    const [rows] = await db.query(
      'SELECT * FROM antes_depois_outros'
    );

    return rows;
  }

};

export default OutrosServicosModel;