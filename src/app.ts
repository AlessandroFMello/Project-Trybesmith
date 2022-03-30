import express from 'express';
import { ordersRoutes, productsRoutes, usersRoutes, loginRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/orders', ordersRoutes);

app.use('/products', productsRoutes);

app.use('/users', usersRoutes);

app.use('/login', loginRoutes);

export default app;
