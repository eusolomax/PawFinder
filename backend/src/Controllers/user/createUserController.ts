import { Request, Response } from "express"
import { myDataSource } from "../../data-source";
import { User } from "../../entities/User";

export async function createUserController(req: Request, res: Response) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) { return res.status(400) }

  const userRepository = myDataSource.getRepository(User)
  const user = new User()

  user.email = email
  user.username = username
  user.password = password

  userRepository.save(user)

  return res.status(201).send("Usuário criado com sucesso");
}