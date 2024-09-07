import { Router } from "express";
import { NextFunction, Request, Response } from "express";
import AuthController from "../controller/auth";

const authRouter = Router()

authRouter.post("/register", (req: Request, res: Response, next: NextFunction) => {
    AuthController.register(req, res, next)
})
authRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
    AuthController.login(req, res, next)
})

export default authRouter