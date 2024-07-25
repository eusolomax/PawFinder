import { Request, Response } from "express"
import { myDataSource } from "../../data-source";
import { User } from "../../entities/User";

export async function createUserController(req: Request, res: Response) {
  const { username, email, password } = req.body;
  const userRepository = myDataSource.getRepository(User)
  const findUser = await userRepository.find({ where: { email } })
  const user = new User()

  //Checks
  if (!username || !email || !password) { return res.status(400).send('Missing necessary fields.') }
  if (findUser.length !== 0) { return res.status(400).send('Email already registered.') }

  user.email = email
  user.username = username
  user.password = password

  userRepository.save(user)

  return res.status(201).send("User registered successfully!");
}