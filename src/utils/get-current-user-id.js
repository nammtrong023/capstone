import { decodeToken } from '../config/jwt.js';

export const getCurrentUserId = async (token) => {
    const decode = decodeToken(token);
    const { id } = decode.data.data;

    return id;
};
