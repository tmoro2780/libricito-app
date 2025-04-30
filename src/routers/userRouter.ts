import { Router } from "express"

import { UserService } from "../services/userService"

const userService = new UserService();

export const userRouter = Router()


