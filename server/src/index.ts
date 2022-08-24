// dotenv will let us read secret values from our .env file
import dotenv from "dotenv"
dotenv.config()

import express, { Express, Request, Response } from "express"
import cors from "cors"
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: '2022-08-01',
});
const app: Express = express()
const port: number | string = process.env.PORT || 4001

app.use(cors({
  origin: "*" // TODO: change this later once we have a front end in production. * will listen for any client request.
}))

app.use(express.json()) // lets us parse the request body coming from the client

app.get('/products', async (req: Request, res: Response) => {
  const products = await stripe.products.list();
  console.log(products);


  res.send(products)

})

app.post('/create-checkout-session', async (req: Request, res: Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1LaFBeFFr9RnerScS9WcFfb4',
        quantity: 1,
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:8080/success',
    cancel_url: 'http://localhost:8080/cancel',
  });


  res.redirect(303, session.url!);

})

app.get("/", (req, res) => {
  return res.status(200).send("hello from server")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})