import bcrypt from 'bcrypt';
import Joi from 'joi';
import dotenv from 'dotenv';

import { loginAdmin } from '../models/login.js';

dotenv.config();

const saltRounds = 10;

const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;"'<,>.?/|~`]).{5,}$/;

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

const authSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string().min(5).required(),
});

export const loginUser = async (req, res) => {
    console.log('[Login Controller]');

    if (!req.body) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: 'Corpo da requisição não pode estar vazio.',
        });
    }

    const { error, value } = loginSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: error.details[0].message,
        });
    }

    try {
        const admin = await getAdministradorByEmail(value.email);

        if (!admin) {
            return res.status(401).json({
                status: 'error',
                code: 401,
                message: 'E-mail ou senha inválidos.',
            });
        }

        const senhaValida = await bcrypt.compare(
            value.password,
            admin.senha
        );

        if (!senhaValida) {
            return res.status(401).json({
                status: 'error',
                code: 401,
                message: 'E-mail ou senha inválidos.',
            });
        }

        return res.status(200).json({
            status: 'success',
            code: 200,
            message: 'Login realizado com sucesso.',
            data: {
                id: admin.id,
                email: admin.email,
            },
        });
    } catch (err) {
        console.error('[Login Error]', err);

        return res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Erro interno ao realizar login.',
            error: err.message,
        });
    }
};
