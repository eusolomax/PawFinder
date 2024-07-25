import { Request, Response } from "express"
import { myDataSource } from "../../data-source";
import { User } from "../../entities/User";

export async function deleteUserController(req: Request, res: Response) {
  const { email } = req.body;
  const userRepository = myDataSource.getRepository(User)
  const findUser = await userRepository.find({ where: { email } })

  console.log(findUser)

  //Checks
  if (!email) { return res.status(400).send('Missing email field.') }
  if (findUser.length === 0) { return res.status(400).send('Email not registered.') }

  userRepository.delete(findUser[0])

  return res.status(201).send("User deleted successfully!");
}