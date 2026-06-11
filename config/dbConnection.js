import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.MYSQLHOST,
    database: process.env.MYSQLDATABASE,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    port: process.env.MYSQLPORT
};
console.log('MYSQLHOST=', process.env.MYSQLHOST);
console.log('MYSQLDATABASE=', process.env.MYSQLDATABASE);
console.log('MYSQLUSER=', process.env.MYSQLUSER);
console.log('MYSQLPORT=', process.env.MYSQLPORT);
const pool = mysql.createPool(dbConfig);

(async () => {
    try {
        const connection = await pool.getConnection();

        console.log('Conexão com o banco de dados efetuada com sucesso!');
        console.log(
            '[dbConnection] host:',
            dbConfig.host,
            'dbname:',
            dbConfig.database
        );

        connection.release();
    } catch (error) {
        console.error('Conexão com o banco de dados gerou um erro.');
        console.error(error);

        if (error.code === 'ECONNREFUSED') {
            console.error('O serviço MySQL não está rodando no localhost');
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('Usuário ou senha incorretos.');
        } else {
            console.error('Erro não identificado:', error);
        }
    }
})();

export default pool;
