import { UserModel } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import { Request, Response } from 'express';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export class UserController {
  private userModel: UserModel;

  constructor() {
      this.userModel = new UserModel();
  }

  async createUser(req: Request, res: Response): Promise<void>
  {
    try {
      const {username, email, password} = req.body;

      const newUser = UserRepository.create(username, email, password)
  
      this.userModel.createUser(newUser);
  
      res.status(201).json({message: 'Usuario criado com sucesso', user: newUser})      
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar usuário'});
    }

  }

}