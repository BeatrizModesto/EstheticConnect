import db from '../../config/dbConnection.js';

export async function listarPost() {
  const [rows] = await db.query('SELECT * FROM blog');
  return rows;
}