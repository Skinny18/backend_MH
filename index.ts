import express, { Request, Response } from 'express';
import { UserController } from './controllers/UserController';

const app = express();
const userController = new UserController();

app.use(express.json());

app.post('/users', userController.createUser.bind(userController));

app.listen(5000, () => {
    console.log('Servidor rodando na porta 3000');
});
