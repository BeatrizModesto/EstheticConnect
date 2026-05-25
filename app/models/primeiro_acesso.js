import db from '../../config/dbConnection.js';

export async function addAdministrador(admin) {
  const query = `
    INSERT INTO login_administrador
    (email,senha)
    VALUES (?,?)
  `;

  const [rows] = await db.execute(query, [
    admin.email,
    admin.senha
  ]);

  return rows;
}
