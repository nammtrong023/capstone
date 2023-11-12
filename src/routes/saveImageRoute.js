import express from 'express';
import { khoaApi } from '../config/jwt.js';
import {
    saveImage,
    getSavedImageByImgId,
    getSavedImageByUserId,
} from '../controllers/saveImage.controller.js';

const saveImageRoute = express.Router();

saveImageRoute.post('', khoaApi, saveImage);
saveImageRoute.get('/by-image-id/:imageId', khoaApi, getSavedImageByImgId);
saveImageRoute.get('/by-user-id/:userId', khoaApi, getSavedImageByUserId);

export default saveImageRoute;
