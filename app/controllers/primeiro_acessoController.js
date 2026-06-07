import bcrypt from 'bcrypt';
import Joi from 'joi';
import dotenv from 'dotenv';

import { addAdministrador } from '../models/primeiro_acesso.js';

dotenv.config();

const saltRounds = 10;

const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;"'<,>.?/|~`]).{5,}$/;

const Schema = Joi.object({
    nome: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.min': 'O nome deve ter no mínimo 3 caracteres.',
            'any.required': 'O nome é obrigatório.',
        }),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': 'O e-mail fornecido não é válido.',
            'any.required': 'O e-mail é obrigatório.',
        }),

    password: Joi.string()
        .min(5)
        .required()
        .pattern(passwordRegex)
        .messages({
            'string.min': 'A senha deve ter no mínimo 5 caracteres.',
            'any.required': 'A senha é obrigatória.',
            'string.pattern.base':
                'A senha deve incluir pelo menos um número e um símbolo.',
        }),
});

export const addUser = async (req, res) => {
    console.log('[Add User Controller]');
    console.log('BODY:', req.body);

    if (!req.body) {
        return res.status(400).render('primeiroAcesso', {
            errors: ['Corpo da requisição não pode estar vazio.'],
            user: {},
        });
    }

    const { error, value } = Schema.validate(req.body);

    if (error) {
        console.log('VALIDATION ERROR:', error.details);

        return res.status(400).render('primeiroAcesso', {
            errors: [error.details[0].message],
            user: req.body,
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(
            value.password,
            saltRounds
        );

        const adminToSave = {
            nome: value.nome,
            email: value.email,
            senha: hashedPassword,
        };

        await addAdministrador(adminToSave);

        return res.render('login', {
            success: 'Conta criada com sucesso!',
            errors: [],
            user: {},
        });

       

    } catch (err) {
        console.error('[Add User Error]', err);

        return res.status(500).render('primeiroAcesso', {
            errors: ['Erro interno ao adicionar usuário.'],
            user: req.body,
        });
    }
};