import { myDataSource } from "@/data-source";
import { User } from "@/entities/User";

export async function createUserService(username: string, email: string, password: string) {
  const userRepository = myDataSource.getRepository(User)
  const foundUser = await userRepository.findOneBy({ email })
  const user = new User()

  if (!username || !email || !password) { throw new Error('Missing necessary fields.'); }
  if (foundUser) { throw new Error('Email already registered.'); }

  user.email = email
  user.username = username
  user.password = password

  userRepository.save(user)

  return User.toDTO(user)
}