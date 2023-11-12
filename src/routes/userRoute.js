import express from 'express';
import { khoaApi } from '../config/jwt.js';
import { upload } from '../utils/upload-image.js';
import {
    login,
    signUp,
    getUsers,
    getUserByImageId,
    updateUserProfile,
} from '../controllers/user.controller.js';

const userRoute = express.Router();
userRoute.post('/login', login);
userRoute.post('/sign-up', signUp);
userRoute.get('', khoaApi, getUsers);
userRoute.get('/get-by-image-id/:imageId/:userId', khoaApi, getUserByImageId);
userRoute.patch('/update-profile', khoaApi, upload.single('file'), updateUserProfile);

export default userRoute;
