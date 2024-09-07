import { NextFunction, Request, Response } from "express";
import usersService from "../services/users";
class usersController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)
        }
    }
    static async login(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (error) {
            next(error)

        }
    }
}

export default usersController