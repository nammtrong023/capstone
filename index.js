import cors from 'cors';
import express from 'express';
import rootRoute from './src/routes/rootRoute.js';

const app = express();
const port = 8080;

app.listen(port);
app.use(cors());

app.use(express.json());
app.use(express.static('.'));
app.use(cors());

app.use('/api', rootRoute);
