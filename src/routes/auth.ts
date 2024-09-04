import { Router } from "express";
import { NextFunction, Request, Response } from "express";
import authController from "../controller/auth";

const authRouter = Router()

authRouter.post("/register", (req: Request, res: Response, next: NextFunction) => {
    authController.register(req, res, next)
})
authRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
    authController.login(req, res, next)
})

export default authRouter