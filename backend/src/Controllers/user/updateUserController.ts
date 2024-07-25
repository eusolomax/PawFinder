import { Request, Response } from "express"
import { myDataSource } from "../../data-source";
import { User } from "../../entities/User";

export async function updateUserController(req: Request, res: Response) {
  const { id, username, email, password } = req.body;
  const userRepository = myDataSource.getRepository(User)
  const findUser = await userRepository.find({ where: { id } })

  console.log(findUser)

  //Checks
  if (!id) { return res.status(400).send('Missing id field.') }
  if (id && !username && !email && !password) { return res.status(400).send('Found user, but no changes where made.') }
  if (findUser.length === 0) { return res.status(400).send('User does not exist.') }

  if (username) { await userRepository.update(id, { username: username }) }
  if (email) { await userRepository.update(id, { email: email }) }
  if (password) { await userRepository.update(id, { password: password }) }

  return res.status(201).send("User edited successfully!");
}