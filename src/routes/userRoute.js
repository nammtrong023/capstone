import express from 'express';
import { khoaApi } from '../config/jwt.js';
import { getUserByImageId, login, signUp } from '../controllers/user.controller.js';

const userRoute = express.Router();
userRoute.post('/login', login);
userRoute.post('/sign-up', signUp);
userRoute.get('/get-by-image-id/:imageId', khoaApi, getUserByImageId);

export default userRoute;
