import bcrypt from 'bcryptjs';
import prisma from '../config/db.js';
import { createToken } from '../config/jwt.js';
import { getCurrentUserId } from '../utils/get-current-user-id.js';

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const isExistingEmail = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (isExistingEmail) {
        return res.send('Email đã tồn tại');
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashPassword,
        },
    });

    return res.status(201).json(user);
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        return res.status(400).send('Email hoặc password không đúng');
    }

    const isMatchesPassword = bcrypt.compareSync(password, user.password);

    if (isMatchesPassword) {
        let token = createToken({ data: user });

        return res.send(token);
    } else {
        return res.send('Password không đúng');
    }
};

const getUserByImageId = async (req, res) => {
    const { imageId } = req.params;
    const { token } = req.headers;
    const userId = await getCurrentUserId(token);

    const user = await prisma.user.findUnique({
        where: {
            id: Number(userId),
        },
        include: {
            image: {
                where: {
                    id: Number(imageId),
                },
            },
        },
    });

    if (user.image.length === 0) {
        return res.status(404).send('Không tìm thấy user');
    }

    return res.status(200).send(user);
};

export { login, signUp, getUserByImageId };
