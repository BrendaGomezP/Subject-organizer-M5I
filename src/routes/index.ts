import { Router } from "express";
import AuthRouter from "./auth";
import usersRouter from "./users";
import subjectsRouter from "./subjects";

const indexRouter = Router()

indexRouter.use("/auth", AuthRouter)
indexRouter.use("/users", usersRouter)
indexRouter.use("/subjects", subjectsRouter)


export default indexRouter