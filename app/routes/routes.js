const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const procedimentosController = require('../controllers/procedimentosController');
const profissionaisController = require('../controllers/profissionaisController');
const agendamentoController = require('../controllers/agendamentoController');
const blogController = require('../controllers/blogController');
const outrosController = require('../controllers/outrosController');

// cada página do HTML
router.get('/', HomeController.home);
router.get('/home', HomeController.home);
router.get('/procedimentoscorporais', procedimentosController.Proc_Corporais);
router.get('/procedimentosfaciais', procedimentosController.Proc_Faciais);
router.get('/procedimentoscapilares', procedimentosController.Proc_Capilares);
router.get('/outrosservicos', outrosController.Outros_Servicos);
router.get('/profissionais', profissionaisController.profissionais);
router.get('/agendamento', agendamentoController.Agendamento);
router.get('/drenagem', procedimentosController.Drenagem);
router.get('/rinomodelacao', procedimentosController.Rinomodelação);
router.get('/bioestimulador', procedimentosController.Bioestimulador);
router.get('/blog', blogController.blog);


module.exports = router;
