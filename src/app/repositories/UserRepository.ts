import User from "../entities/User"
import IUser from "../interfaces/IUsers"
import { AppDataSource } from "../../database/data-source"

// Habititar o uso dos metodos paradoes que o ORM disponabiliza

const userRepository = AppDataSource.getRepository(User)

const getUsers = (): Promise<IUser[]> => {
   //IUser was the interface we created // we are returning an array of that
   // this returns an array based promise
   return userRepository.find() // same as Select * from Users
}

export default { getUsers }
