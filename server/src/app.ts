// dotenv will let us read secret values from our .env file
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db"
import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.routes";
import productsRoutes from "./routes/productsRoutes";
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

const items = [
  {
    id: "1",
    inventory: 100,
    title: "Super Long Watch Name",
    desc: "Series 6. Red",
    longDesc:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
    fullDesc: "",
    colors: [
      ["Sky Blue", "#80BDE3"],
      ["Rose Gold", "#B76E79"],
      ["green", "#9FE2BF"],
    ],
    price: 359,
    src: "../assets/apple-watch-red.png",
    promo: "",
  },
  {
    id: "2",
    inventory: 100,
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    longDesc:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
    fullDesc: "",
    colors: [
      ["Sky Blue", "#80BDE3"],
      ["Rose Gold", "#B76E79"],
      ["green", "#9FE2BF"],
    ],
    price: 159,
    src: "../assets/samsung-galaxy-watch.png",
    promo: "",
  },
  {
    id: "3",
    inventory: 100,
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    longDesc:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
    fullDesc: "",
    colors: [
      ["Sky Blue", "#80BDE3"],
      ["Rose Gold", "#B76E79"],
      ["green", "#9FE2BF"],
    ],
    price: 159,
    src: "../assets/samsung-galaxy-watch.png",
    promo: "",
  },
  {
    id: "4",
    inventory: 100,
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    longDesc:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
    fullDesc: "",
    colors: [
      ["Sky Blue", "#80BDE3"],
      ["Rose Gold", "#B76E79"],
      ["green", "#9FE2BF"],
    ],
    price: 159,
    src: "../assets/samsung-galaxy-watch.png",
    promo: "",
  },
  {
    id: "5",
    inventory: 100,
    title: "SAMSUNG Galaxy Watch",
    desc: "Active. Green",
    longDesc:
      "Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
    fullDesc: "",
    colors: [
      ["Sky Blue", "#80BDE3"],
      ["Rose Gold", "#B76E79"],
      ["green", "#9FE2BF"],
    ],
    price: 159,
    src: "../assets/samsung-galaxy-watch.png",
    promo: "",
  },
];

/*

!!! IMPORTANT PLEASE READ !!!


POSTMAN Add Post Instructcions

Choose POST 

URL
http://localhost:4001/products

Body > Raw > Json

{
    "id":"1",
    "inventory":100,
    "title": "Super Long Watch Name",
    "desc": "Series 6. Red",
    "longDesc":"Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.",
    "fullDesc": "",
    "price": 359,
    "promo": "",
    "src": "../assets/apple-watch-red.png"
}

You will need a .env file in the server root directory with this inside it
MONGO_URI=mongodb+srv://kb:Fuckthis22@cluster0.8dyricr.mongodb.net/eRenaissance?retryWrites=true&w=majority

Please use the data model above for creating your routes for now!!!

For local testing you will need to change the items api route url to
http://localhost:4001/products
to test locally
*/

// products route
// app.use("/products", productsRoutes)

app.use("/items", (req: Request, res: Response, next: NextFunction): void => {
  res.status(200).send(items)
});

app.use("/users", userRoutes);


app.get('/products', async (req: Request, res: Response) => {
  const products =  await stripe.products.list({
    expand: ['data.default_price'],active: true,
  });

  res.send(products.data)
})


app.post('/create-checkout-session', async (req: Request, res: Response) => {
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

export default app;

