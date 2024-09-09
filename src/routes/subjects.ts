import { Router } from "express";
import { NextFunction, Request, Response } from "express";
import SubjectsController from "../controller/subjects";
// middlewares
import checkToken from "../middlewares/check-token";


const subjectsRouter = Router()

subjectsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.getAll(req, res, next)
})

subjectsRouter.post("/", checkToken, (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.create(req, res, next)

})
subjectsRouter.patch("/:id", checkToken, (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.updateById(req, res, next)

})
subjectsRouter.delete("/:id", checkToken, (req: Request, res: Response, next: NextFunction) => {
    SubjectsController.deleteById(req, res, next)

})
export default subjectsRouter