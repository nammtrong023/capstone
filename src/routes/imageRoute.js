import express from 'express';
import { upload } from '../utils/upload-image.js';
import { khoaApi } from '../config/jwt.js';
import {
    deleteImage,
    getImageById,
    getImageByUserId,
    getListImage,
    uploadImage,
} from '../controllers/image.controller.js';

const imageRoute = express.Router();

imageRoute.post('/upload', khoaApi, upload.array('files'), uploadImage);
imageRoute.get('', khoaApi, getListImage);
imageRoute.get('/:imageId', khoaApi, getImageById);
imageRoute.get('/get-by-user-id/:userId', khoaApi, getImageByUserId);
imageRoute.delete('/:imageId', khoaApi, deleteImage);

export default imageRoute;
