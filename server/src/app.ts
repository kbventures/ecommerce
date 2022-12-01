import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db"
import express, { Application, Request, Response, NextFunction } from "express";
// import { router as userRoutes } from "./routes/user";
const userRoutes = require("./routes/user");
import cors from "cors"
const logger = require("morgan");
import productInterface from "./models/Product"

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
  apiVersion: '2022-08-01',
});

const app: Application = express();

connectDB();

//Logging
app.use(logger("dev"));

app.use(cors({
  origin: "*" // TODO: change this later once we have a front end in production. * will listen for any client request.
}))


app.use(express.json()) // lets us parse the request body coming from the client

app.get("/", (req, res) => {
  return res.status(200).send("hello from server")
})

app.use("/users", userRoutes);


app.get('/products', async (req: Request, res: Response,next: NextFunction) => {
  const products =  await stripe.products.list({
    expand: ['data.default_price'],active: true,
  });

  res.send(products.data)
})

app.post('/create-checkout-session', async (req: Request, res: Response,next: NextFunction) => {
  const products:any = req.body.map((e:any)=>{
    return {price: e.default_price.id, quantity: 1};
  })

  const session = await stripe.checkout.sessions.create({
    line_items: products,
    mode: 'payment',
    success_url: 'https://e-renaissance.herokuapp.com/home',
    cancel_url: 'https://e-renaissance.herokuapp.com/',
  });

  res.json(session.url!);
})



// MMP
app.use('/user',userRoutes)

export default app;

