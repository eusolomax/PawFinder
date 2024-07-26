import { Request, Response } from "express"
import { myDataSource } from "@/data-source";
import { User } from "@/entities/User";

export async function deleteUserController(req: Request, res: Response) {
  const { id } = req.body;
  if (typeof id != 'number') { return res.status(400).send('Invalid user ID.') }

  const userRepository = myDataSource.getRepository(User)
  const findUser = await userRepository.find({ where: { id } })

  console.log(findUser)

  //Checks
  if (!id) { return res.status(400).send('Missing ID field.') }
  if (findUser.length === 0) { return res.status(400).send('ID not registered.') }

  userRepository.delete(findUser[0])

  return res.status(201).send("User deleted successfully!");
}