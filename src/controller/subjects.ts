import { NextFunction, Request, Response } from "express";
import subjectsService from "../services/subjects";
class subjectsController {
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

export default subjectsController