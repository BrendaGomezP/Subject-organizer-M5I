import { Router } from "express";
import { NextFunction, Request, Response } from "express";
import SubjectsController from "../controller/subjects";


const subjectsRouter = Router()

subjectsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.getAll(req, res, next)
})
subjectsRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.getById(req, res, next)

})
subjectsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.create(req, res, next)

})
subjectsRouter.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.updateById(req, res, next)

})
subjectsRouter.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.deleteById(req, res, next)

})
export default subjectsRouter