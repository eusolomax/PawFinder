import { Request, Response } from "express"
import { myDataSource } from "@/data-source";
import { User } from "@/entities/User";

export async function deleteUserService(id: number) {
  if (typeof id != 'number') { throw new Error('Invalid user ID.') }

  const userRepository = myDataSource.getRepository(User)
  const findUser = await userRepository.find({ where: { id } })

  //Checks
  if (!id) { throw new Error('Missing ID field.') }
  if (findUser.length === 0) { throw new Error('ID not registered.') }

  userRepository.delete(findUser[0])

  return findUser[0]
}