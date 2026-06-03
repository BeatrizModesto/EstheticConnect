import bcrypt from 'bcrypt';
import Joi from 'joi';
import dotenv from 'dotenv';

import { addAdministrador } from '../models/primeiro_acesso.js';

dotenv.config();

const saltRounds = 10;

const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;"'<,>.?/|~`]).{5,}$/;

const registerSchema = Joi.object({
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
        .regex(passwordRegex)
        .messages({
            'string.min': 'A senha deve ter no mínimo 5 caracteres.',
            'any.required': 'A senha é obrigatória.',
            'string.regex.base':
                'A senha deve incluir pelo menos um número e um símbolo.',
        }),
});

export const addUser = async (req, res) => {
    console.log('[Add User Controller]');

    if (!req.body) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: 'Corpo da requisição não pode estar vazio.',
        });
    }

    const { error, value } = registerSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: error.details[0].message,
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(value.password, saltRounds);

        const adminToSave = {
            email: value.email,
            senha: hashedPassword,
        };

        const addedAdmin = await addAdministrador(adminToSave);

        return res.status(201).json({
            status: 'success',
            code: 201,
            message: 'Administrador cadastrado com sucesso.',
            data: addedAdmin,
        });
    } catch (err) {
        console.error('[Add User Error]', err);

        return res.status(500).json({
            status: 'error',
            code: 500,
            message: 'Erro interno ao adicionar usuário.',
            error: err.message,
        });
    }
};
