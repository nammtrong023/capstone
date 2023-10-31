import express from 'express';
import imageRoute from './imageRoute.js';
import userRoute from './userRoute.js';
import commentRoute from './commentRoute.js';

const rootRoutes = express.Router();

rootRoutes.use('/users', userRoute);
rootRoutes.use('/images', imageRoute);
rootRoutes.use('/comments', commentRoute);

export default rootRoutes;
