// dotenv will let us read secret values from our .env file
import dotenv from "dotenv"
dotenv.config()

import express, { Application, Request, Response, NextFunction } from "express";

import { router as userRoutes } from "./routes/user.routes";
import productsRouter from "./routes/products.routes";


import cors from "cors"

const app: Application = express();



app.use(cors({
  origin: "*" // TODO: change this later once we have a front end in production. * will listen for any client request.
}))

app.use(express.json()) // lets us parse the request body coming from the client

app.use("/users", userRoutes);

// Products Route
app.use("/api/products", productsRouter);


app.get("/", (req, res) => {
  return res.status(200).send("hello from server")
})

// interface Item {
//   id: string;
//   inventory: number;
//   title: string;
//   desc: string;
//   longDesc: string;
//   fullDesc: string;
//   colors: string[][];
//   price: number;
//   src: string;
//   promo: string;
// }





// app.use("/items", (req: Request, res: Response, next: NextFunction): void => {
//   res.status(200).send(items)
// });


// app.get("/items", (req, res) => {
//   res.status(200).send(items)
// })


export default app;
