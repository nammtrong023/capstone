import express from 'express';
import { khoaApi } from '../config/jwt.js';
import { createComment } from '../controllers/comment.controller.js';

const commentRoute = express.Router();

commentRoute.post('', khoaApi, createComment);

export default commentRoute;
