import bcrypt from 'bcrypt';
import Joi from 'joi';
import dotenv from 'dotenv';

import { loginAdmin } from '../models/login.js';

dotenv.config();

const loginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': 'O e-mail fornecido não é válido.',
            'any.required': 'O e-mail é obrigatório.',
        }),

    password: Joi.string()
        .required()
        .messages({
            'any.required': 'A senha é obrigatória.',
        }),
});

export const loginUser = async (req, res) => {
    console.log('[Login Controller]');

    if (!req.body) {
        return res.status(400).render('login', {
            errors: ['Corpo da requisição não pode estar vazio.'],
            success: null,
            user: {},
        });
    }

    const { error, value } = loginSchema.validate(req.body);

    if (error) {
        return res.status(400).render('login', {
            errors: [error.details[0].message],
            success: null,
            user: req.body,
        });
    }

    try {
        const admin = await loginAdmin(value.email);

        if (!admin) {
            return res.status(401).render('login', {
                errors: ['E-mail ou senha inválidos.'],
                success: null,
                user: req.body,
            });
        }

        const senhaValida = await bcrypt.compare(
            value.password,
            admin.senha
        );

        if (!senhaValida) {
            return res.status(401).render('login', {
                errors: ['E-mail ou senha inválidos.'],
                success: null,
                user: req.body,
            });
        }

        return res.redirect('/admin');


    } catch (err) {
        console.error('[Login Error]', err);

        return res.status(500).render('login', {
            errors: ['Erro interno ao realizar login.'],
            success: null,
            user: req.body,
        });
    }
};