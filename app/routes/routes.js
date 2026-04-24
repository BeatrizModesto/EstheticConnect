import { home } from '../controllers/home.js';
import { addAgendamento} from '../controllers/home.js';

export function registerRoutes(app) {
    app.get('/', (req, res) => {
        home(req, res);
    });
    app.get('/procedimentosfaciais', (req, res) => {
        res.render('procedimentosfaciais.ejs');
    });

     app.get('/procedimentoscorporais', (req, res) => {
        res.render('procedimentoscorporais.ejs');
    });

   app.get('/procedimentoscapilares', (req, res) => {
        res.render('procedimentoscapilares.ejs');
    });

    app.get('/outrosservicos', (req, res) => {
        res.render('outrosservicos.ejs');
    });

     app.get('/profissionais', (req, res) => {
        res.render('profissionais.ejs');
    });

    app.post('/agendamento', addAgendamento);

    // app.post('/profissionais/duvidas', getDuvida);


    // app.get('*', (req, res) => {
    //     res.render('notfound.ejs');
    // });
   
    
}

    app.post('/profissionais/duvidas', getDuvida);


    // app.get('*', (req, res) => {
    //     res.render('notfound.ejs');
    // });
   
    
}
