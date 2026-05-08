import {getDuvida, getProfissionais, home } from '../controllers/home.js';
import { addAgendamento} from '../controllers/home.js';
import { Proc_Faciais, Proc_Corporais, Proc_Capilares, } from '../controllers/procedimentosController.js';
import { OutrosServicos } from '../controllers/outrosServicosController.js';


export function registerRoutes(app) {
    app.get('/', (req, res) => {
        home(req, res);
    });
   app.get('/procedimentosfaciais', Proc_Faciais);
   
    app.get('/procedimentoscorporais', Proc_Corporais);

   app.get('/procedimentoscapilares', Proc_Capilares);

    app.get('/outrosservicos', OutrosServicos);

     app.get('/profissionais', getProfissionais);

    app.get('/blog',(req,res)=>{
        res.render('blog.ejs')
    });

   app.post('/duvida/salvar', getDuvida);
    // app.get('*', (req, res) => {
    //     res.render('notfound.ejs');
    // });

   app.get('/agendamento', (req, res) => {
        res.render('agendamento', {
            agendamento: {},
            errors: []
        });
    });

    app.post('/agendamento', addAgendamento);



    // app.get('*', (req, res) => {
    //     res.render('notfound.ejs');
    // });
   
    
}

