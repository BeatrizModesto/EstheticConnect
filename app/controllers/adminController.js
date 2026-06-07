import AdminModel from '../models/adminModel.js';

export async function dashboard(req, res) {

    try {

        const agendamentos =
            await AdminModel.listarAgendamentos();

        const duvidas =
            await AdminModel.listarDuvidas();

        res.render(
            'dashboard',
            {
                agendamentos,
                duvidas,
                mensagem: req.query.mensagem || null
            }
        );

    } catch (error) {

        console.error(error);

        res.render('erro', {
            mensagem:
                'Erro ao carregar dashboard'
        });
    }
}

export async function excluirAgendamento(req, res) {

    try {

        await AdminModel.excluirAgendamento(
            req.params.id
        );

        res.redirect(
            '/admin?mensagem=Agendamento excluído com sucesso'
        );

    } catch (error) {

        console.error(error);

        res.render('erro', {
            mensagem:
                'Erro ao excluir agendamento'
        });
    }
}

export async function excluirDuvida(req, res) {

    try {

        await AdminModel.excluirDuvida(
            req.params.id
        );

        res.redirect(
            '/admin?mensagem=Dúvida excluída com sucesso'
        );

    } catch (error) {

        console.error(error);

        res.render('erro', {
            mensagem:
                'Erro ao excluir dúvida'
        });
    }
}

export async function atualizarAgendamento(
    req,
    res
) {

    try {

        await AdminModel.atualizarAgendamento(
            req.params.id,
            req.body
        );

        res.redirect(
            '/admin?mensagem=Agendamento atualizado com sucesso'
        );

    } catch (error) {

        console.error(error);

        res.render('erro', {
            mensagem:
                'Erro ao atualizar agendamento'
        });
    }
}

export async function atualizarDuvida(
    req,
    res
) {

    try {

        await AdminModel.atualizarDuvida(
            req.params.id,
            req.body
        );

        res.redirect(
            '/admin?mensagem=Dúvida atualizada com sucesso'
        );

    } catch (error) {

        console.error(error);

        res.render('erro', {
            mensagem:
                'Erro ao atualizar dúvida'
        });
    }
}

export function logout(req, res) {

    res.clearCookie('token');

    res.redirect('/login');
}
