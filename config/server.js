import express from 'express';
const app = express();
const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./public'));

app.listen(port, () => {
    console.log('Servidor web rodando na porta ', port);
});

app.use(express.urlencoded({ extended: true }));

export default app;
