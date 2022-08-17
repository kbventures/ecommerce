// dotenv will let us read secret values from our .env file
import dotenv from "dotenv"
dotenv.config()

import express, { Express, Request, Response } from "express"
import cors from "cors"

const app: Express = express()
const port: string | undefined = process.env.PORT

app.use(cors({
  origin: "http://localhost:8080" // server can only listen for requests coming from localhost:8080
}))

app.use(express.json()) // lets us parse the request body coming from the client

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})