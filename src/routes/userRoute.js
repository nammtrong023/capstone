import express from 'express';
import { khoaApi } from '../config/jwt.js';
import { getUserByImageId, getUsers, login, signUp } from '../controllers/user.controller.js';

const userRoute = express.Router();
userRoute.post('/login', login);
userRoute.post('/sign-up', signUp);
userRoute.get('', khoaApi, getUsers);
userRoute.get('/get-by-image-id/:imageId/:userId', khoaApi, getUserByImageId);

export default userRoute;
