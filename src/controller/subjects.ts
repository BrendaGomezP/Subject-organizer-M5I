import { NextFunction, Request, Response } from "express";
import SubjectsService from "../services/subjects";
class SubjectsController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await SubjectsService.getAll(req.query);

            res.status(200).json({ data: data })

        } catch (error) {
            next(error)
        }
    }
   
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await SubjectsService.create(req.body)
            
            res.status(201).json({ data: data })


        } catch (error) {
            next(error)

        }
    }
    static async updateById(req: Request, res: Response, next: NextFunction) {
        try {
            await SubjectsService.updateById(req.params.id, req.body)
            res.status(200).json({ message: "Producto modificado con exito" })


        } catch (error) {
            next(error)

        }
    }
    static async deleteById(req: Request, res: Response, next: NextFunction) {
        try {
            await SubjectsService.deleteById(req.params.id)
            res.status(200).json({ message: "Producto eliminado con exito" })

        } catch (error) {
            next(error)

        }
    }
}

export default SubjectsController