import { NextFunction, Request, Response } from "express";
import SubjectsService from "../services/subjects";
class SubjectsController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            SubjectsService.getAll(req.query)

        } catch (error) {
            next(error)
        }
    }
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            SubjectsService.getById(req.params)

        } catch (error) {
            next(error)

        }
    }
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await SubjectsService.create(req.body)
            if (data == false) {
                const error = new Error("Datos invalidos");
                error["statusCode"] = 400

                throw error
            }
            res.status(201).json({ data: data })


        } catch (error) {
            next(error)

        }
    }
    static async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            SubjectsService.updateById(req.params)

        } catch (error) {
            next(error)

        }
    }
    static async deleteById(req: Request, res: Response, next: NextFunction) {
        try {
            SubjectsService.deleteById(req.params)

        } catch (error) {
            next(error)

        }
    }
}

export default SubjectsController