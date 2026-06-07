import { home } from '../controllers/home.js';
import { addAgendamento} from '../controllers/home.js';
import { Proc_Faciais, Proc_Corporais, Proc_Capilares, } from '../controllers/procedimentosController.js';
import { OutrosServicos } from '../controllers/outrosServicosController.js';
import { getProfissionais, getDuvida } from '../controllers/profissionais.js';
import { getPost } from '../controllers/blog.js';
import { addUser } from '../controllers/primeiro_acessoController.js';
import { excluirAgendamento, excluirDuvida, atualizarAgendamento, atualizarDuvida, dashboard, logout} from '../controllers/adminController.js';
import { loginUser } from '../controllers/loginController.js';
import authAdmin from '../utils/isAuth.js';

export function registerRoutes(app) {
    app.get('/', (req, res) => {
        home(req, res);
    });
   app.get('/procedimentosfaciais', Proc_Faciais);
   
   app.get('/procedimentoscorporais', Proc_Corporais);

   app.get('/procedimentoscapilares', Proc_Capilares);

   app.get('/outrosservicos', OutrosServicos);

   app.get('/profissionais', getProfissionais);

   app.get('/blog', getPost );

   app.post('/duvida/salvar', getDuvida);
   

   app.get('/agendamento', (req, res) => {
        res.render('agendamento', {
            agendamento: {},
            errors: []
        });
    });

    app.post('/agendamento', addAgendamento);

    //login e primeiro acesso

    app.get('/primeiroAcesso',(req,res)=>{

    res.render('primeiroAcesso',{
        errors:[],
        user:{}
    });

});
        
    app.post('/primeiroAcesso', addUser);

    app.get('/login', (req,res)=>{

    res.render('login',{
        errors:[],
        success:null,
        user:{}
    });

    });

    app.post('/login', loginUser);

    // Rotas protegidas para o admin

    app.get('/admin', authAdmin, dashboard);

    app.post('/admin/agendamento/:id/editar', authAdmin, atualizarAgendamento);

    app.post('/admin/agendamento/:id/excluir', authAdmin, excluirAgendamento);

    app.post('/admin/duvida/:id/editar',authAdmin, atualizarDuvida);

    app.post('/admin/duvida/:id/excluir',authAdmin,excluirDuvida);

    app.get('/logout',logout);

   
}


    export function register404(app) {
        app.use((req, res) => {
            res.status(404).render('404');
        });
    }


