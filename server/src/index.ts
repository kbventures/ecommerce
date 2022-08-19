// dotenv will let us read secret values from our .env file
import dotenv from "dotenv"
dotenv.config()

import express, { Express, Request, Response } from "express"
import cors from "cors"

const app: Express = express()
const port: number | string | undefined = process.env.PORT || 4001

app.use(cors({
  origin: "*" // TODO: change this later once we have a front end in production. * will listen for any client request.
}))

app.use(express.json()) // lets us parse the request body coming from the client

app.get("/", (req, res) => {
  return res.status(200).send("hello from server")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})