import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from 'joi';

import { loginAdmin } from '../models/login.js';

const loginSchema = Joi.object({

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .required()

});

export const loginUser = async (req, res) => {

    const { error, value } =
        loginSchema.validate(req.body);

    if (error) {

        return res.render('login', {
            errors: [error.details[0].message],
            success: null,
            user: req.body
        });
    }

    try {

        const admin =
            await loginAdmin(value.email);

        if (!admin) {

            return res.render('login', {
                errors: ['Email ou senha inválidos'],
                success: null,
                user: req.body
            });
        }

        const senhaValida =
            await bcrypt.compare(
                value.password,
                admin.senha
            );

        if (!senhaValida) {

            return res.render('login', {
                errors: ['Email ou senha inválidos'],
                success: null,
                user: req.body
            });
        }

        const token = jwt.sign(
            {
                id: admin.id,
                email: admin.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '2h'
            }
        );

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 7200000
        });

        return res.redirect('/admin');

    } catch (error) {

        console.error(error);

        res.render('login', {
            errors: ['Erro interno'],
            success: null,
            user: req.body
        });
    }
};
