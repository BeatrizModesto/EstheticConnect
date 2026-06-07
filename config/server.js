import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const app = express();
const port = process.env.port || 4000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./public'));


app.listen(port, () => {
    console.log('Servidor web rodando na porta ', port);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

export default app;
