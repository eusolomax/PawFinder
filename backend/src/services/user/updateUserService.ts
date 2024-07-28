import { Request, Response } from "express"
import { myDataSource } from "@/data-source";
import { User } from "@/entities/User";

export async function updateUserService(id: number, username: string | undefined, email: string | undefined, password: string | undefined) {
  const userRepository = myDataSource.getRepository(User)
  const findUser = await userRepository.findOneBy({ id })

  //Checks
  if (!id) { throw new Error('Missing id field.') }
  if (id && !username && !email && !password) { throw new Error('Found user, but no changes where made.') }
  if (findUser === null) { throw new Error('User does not exist.') }

  if (username) { await userRepository.update(id, { username: username }) }
  if (email) { await userRepository.update(id, { email: email }) }
  if (password) { await userRepository.update(id, { password: password }) }

  return findUser
}