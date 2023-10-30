import User from "../entities/User"
import IUser from "../interfaces/IUsers"
import { AppDataSource } from "../../database/data-source"

// Habititar o uso dos metodos paradoes que o ORM disponabiliza
const userRepository = AppDataSource.getRepository(User)

const getUsers = (): Promise<IUser[]> => {
   return userRepository.find() // same as Select * from Users
}

const createUser = (user: IUser): Promise<IUser> => {
   return userRepository.save(user)
}

export default { getUsers, createUser }
