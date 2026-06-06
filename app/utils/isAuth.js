import jwt from 'jsonwebtoken';

const authAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            status: 'error',
            code: 401,
            message: 'Não autorizado. Token não fornecido.'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (err) {
        return res.status(403).json({
            status: 'error',
            code: 403,
            message: 'Acesso negado. Token inválido ou expirado.'
        });
    }
};

export default authAdmin;