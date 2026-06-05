import AdminModel from '../models/adminModel.js';

export async function dashboard(req, res) {

  const agendamentos =
    await AdminModel.listarAgendamentos();

  const duvidas =
    await AdminModel.listarDuvidas();

  res.render('admin/dashboard', {
    agendamentos,
    duvidas
  });
}

export async function excluirAgendamento(req, res) {

  await AdminModel.excluirAgendamento(
    req.params.id
  );

  res.redirect('/admin');
}

export async function excluirDuvida(req, res) {

  await AdminModel.excluirDuvida(
    req.params.id
  );

  res.redirect('/admin');
}

export async function atualizarAgendamento(req, res) {

  await AdminModel.atualizarAgendamento(
    req.params.id,
    req.body
  );

  res.redirect('/admin');
}

export async function atualizarDuvida(req, res) {

  await AdminModel.atualizarDuvida(
    req.params.id,
    req.body
  );

  res.redirect('/admin');
}

