import OutrosServicosModel from '../models/outrosServicosModel.js';

export async function OutrosServicos(req, res) {

  try {

    const servicos =
      await OutrosServicosModel.listarServicos();

    const antesDepois =
      await OutrosServicosModel.listarAntesDepois();

    res.render('outrosservicos', {
      servicos,
      antesDepois
    });

  } catch (erro) {

    console.log(erro);

    res.status(500).send(
      'Erro ao carregar página'
    );

  }

}
