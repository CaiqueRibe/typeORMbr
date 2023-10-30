import { Request, Response, Router } from "express"
import User from "../entities/User"
import IUser from "../interfaces/IUsers"
import UserRepository from "../repositories/UserRepository"

const userRouter = Router()

userRouter.get("/", async (_req: Request, res: Response): Promise<Response> => {
   const users = await UserRepository.getUsers()
   return res.status(200).json(users)
})

userRouter.post("/create", async (req: Request, res: Response): Promise<Response> => {
   const { name, email } = req.body
   const user: IUser = { name, email }
   const newUser = await UserRepository.createUser(user)
   return res.status(200).json(newUser)
})

export default userRouter
