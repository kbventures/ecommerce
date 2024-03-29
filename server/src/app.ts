import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import logger from 'morgan';
import connectDB from './config/db';
import { router as userRoutes } from './routes/user';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET || '', {
  apiVersion: '2022-08-01',
});

const app: Application = express();

connectDB();

// Logging
app.use(logger('dev'));

app.use(
  cors({
    origin: '*', // TODO: change this later once we have a front end in production. * will listen for any client request.
  })
);

app.use(express.json()); // lets us parse the request body coming from the client

app.get('/api', (req, res) => res.status(200).send('hello from server'));

app.use('/api/users', userRoutes);

app.get('/api/products', async (req: Request, res: Response) => {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  });

  res.send(products.data);
});
interface LineItem {
  amount?: number;
  price?: string;
  quantity?: number;
  default_price?: {
    id: string;
  };
}

app.post(
  '/api/create-checkout-session',
  async (req: Request<any, any, LineItem[], any>, res: Response) => {
    console.log(req.body);
    const products = req.body.map((e) => ({
      price: e.default_price?.id,
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: products,
      mode: 'payment',
      success_url: 'https://erenaissance-frontend.vercel.app/home',
      cancel_url: 'https://erenaissance-frontend.vercel.app/',
    });

    res.json(session.url);
  }
);

// MMP
app.use('/api/user', userRoutes);

export default app;
