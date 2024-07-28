import { Request, Response } from "express"
import { myDataSource } from "@/data-source";
import { User } from "@/entities/User";

export async function deleteUserService(id: number) {
  if (typeof id != 'number') { throw new Error('Invalid user ID.') }

  const userRepository = myDataSource.getRepository(User)
  const findUser = await userRepository.findOneBy({ id })

  //Checks
  if (!id) { throw new Error('Missing ID field.') }
  if (findUser === null) { throw new Error('ID not registered.') }

  userRepository.remove(findUser)

  return findUser
}