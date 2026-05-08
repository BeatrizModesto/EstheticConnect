import ProcFacialModel from '../models/ProcFacialModel.js';
import ProcCorporalModel from '../models/ProcCorporalModel.js';
import ProcCapilarModel from '../models/ProcCapilarModel.js';

export async function Proc_Faciais(req, res) {
  try {

    const procedimentos = await ProcFacialModel.listarProcedimentos();
    const antesDepois = await ProcFacialModel.listarAntesDepois();

    res.render('procedimentosfaciais', {
      procedimentos,
      antesDepois
    });

  } catch (erro) {
    console.error(erro);
    res.send("Erro ao carregar página facial");
  }
}


export async function Proc_Corporais(req, res) {

  try {

    const procedimentos =
      await ProcCorporalModel.listarProcedimentos();

    const antesDepois =
      await ProcCorporalModel.listarAntesDepois();

    res.render('procedimentoscorporais', {
      procedimentos,
      antesDepois
    });

  } catch (erro) {

    console.log(erro);

    res.send('Erro ao carregar página corporal');
  }
}


export async function Proc_Capilares(req, res) {

  try {

    const procedimentos =
      await ProcCapilarModel.listarProcedimentos();

    const antesDepois =
      await ProcCapilarModel.listarAntesDepois();

    res.render('procedimentoscapilares', {
      procedimentos,
      antesDepois
    });

  } catch (erro) {

    console.log(erro);

    res.status(500).send(
      'Erro ao carregar página capilar'
    );

  }

}
