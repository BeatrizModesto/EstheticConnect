import db from '../../config/dbConnection.js';

export async function loginAdmin(email) {
  const query = `
    SELECT * FROM login_administrador
    WHERE email = ?
  `;

  const [rows] = await db.execute(query, [email]);

  return rows[0];
}