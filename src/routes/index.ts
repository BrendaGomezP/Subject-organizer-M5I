import { Router } from "express";
import authRouter from "./auth";
import usersRouter from "./users";
import subjectsRouter from "./subjects";

const indexRouter = Router()

indexRouter.use("/auth", authRouter)
indexRouter.use("/users", usersRouter)
indexRouter.use("/subjects", subjectsRouter)


export default indexRouter