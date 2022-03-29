import express from 'express';
import { ordersRoutes, productsRoutes, usersRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/orders', ordersRoutes);

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

export default app;
