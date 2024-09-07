import express, { json } from "express"

// Routers
import indexRouter from "./routes"

// Middlewares
import errorHandler from "./middlewares/error-handler"

const app = express()

app.use(json())

app.use("/status", (req, res) => res.json({ environment: process.env.ENVIRONMENT }))

app.use("/", indexRouter)

app.use(errorHandler)


export default app
