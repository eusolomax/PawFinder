import { Request, Response } from 'express';

import { createUserService } from '../services/user/createUserService';
import { deleteUserService } from '../services/user/deleteUserService';
import { updateUserService } from '../services/user/updateUserService';

export class UserController {
  static async createUser(req: Request, res: Response) {
    const { username, email, password } = req.body;

    try {
      const user = await createUserService(username, email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.body;

    try {
      const user = await deleteUserService(id);
      res.status(201).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const { id, username, email, password } = req.body;

    try {
      const user = await updateUserService(id, username, email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}
