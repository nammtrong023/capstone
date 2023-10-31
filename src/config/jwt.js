import jwt from 'jsonwebtoken';

const createToken = (data) => {
    let token = jwt.sign({ data }, 'CAPSTONE', { expiresIn: '1h' });

    return token;
};

const checkToken = (token) => {
    return jwt.verify(token, 'CAPSTONE');
};

const decodeToken = (token) => {
    return jwt.decode(token);
};

const khoaApi = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).send('Không có quyền truy cập');
    }

    try {
        const isValidToken = checkToken(token);

        if (isValidToken) next();
    } catch (error) {
        return res.status(401).send('Token không hợp lệ');
    }
};

export { createToken, checkToken, decodeToken, khoaApi };
