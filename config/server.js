import express from 'express';
import dotenv from 'dotenv';
const app = express();
const port = process.env.port || 4000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./public'));

app.listen(port, () => {
    console.log('Servidor web rodando na porta ', port);
});

app.use(express.urlencoded({ extended: true }));

export default app;
