import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import logger from 'morgan';
import connectDB from './config/db';
import { router as userRoutes } from './routes/user.routes';

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

app.get('/', (req, res) => res.status(200).send('hello from server'));

const items = [
  {
    id: '1',
    inventory: 100,
    title: 'Super Long Watch Name',
    desc: 'Series 6. Red',
    longDesc:
      'Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.',
    fullDesc: '',
    colors: [
      ['Sky Blue', '#80BDE3'],
      ['Rose Gold', '#B76E79'],
      ['green', '#9FE2BF'],
    ],
    price: 359,
    src: '../assets/apple-watch-red.png',
    promo: '',
  },
  {
    id: '2',
    inventory: 100,
    title: 'SAMSUNG Galaxy Watch',
    desc: 'Active. Green',
    longDesc:
      'Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.',
    fullDesc: '',
    colors: [
      ['Sky Blue', '#80BDE3'],
      ['Rose Gold', '#B76E79'],
      ['green', '#9FE2BF'],
    ],
    price: 159,
    src: '../assets/samsung-galaxy-watch.png',
    promo: '',
  },
  {
    id: '3',
    inventory: 100,
    title: 'SAMSUNG Galaxy Watch',
    desc: 'Active. Green',
    longDesc:
      'Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.',
    fullDesc: '',
    colors: [
      ['Sky Blue', '#80BDE3'],
      ['Rose Gold', '#B76E79'],
      ['green', '#9FE2BF'],
    ],
    price: 159,
    src: '../assets/samsung-galaxy-watch.png',
    promo: '',
  },
  {
    id: '4',
    inventory: 100,
    title: 'SAMSUNG Galaxy Watch',
    desc: 'Active. Green',
    longDesc:
      'Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.',
    fullDesc: '',
    colors: [
      ['Sky Blue', '#80BDE3'],
      ['Rose Gold', '#B76E79'],
      ['green', '#9FE2BF'],
    ],
    price: 159,
    src: '../assets/samsung-galaxy-watch.png',
    promo: '',
  },
  {
    id: '5',
    inventory: 100,
    title: 'SAMSUNG Galaxy Watch',
    desc: 'Active. Green',
    longDesc:
      'Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, 4.99/month after free trial.',
    fullDesc: '',
    colors: [
      ['Sky Blue', '#80BDE3'],
      ['Rose Gold', '#B76E79'],
      ['green', '#9FE2BF'],
    ],
    price: 159,
    src: '../assets/samsung-galaxy-watch.png',
    promo: '',
  },
];

app.use('/items', (req: Request, res: Response): void => {
  res.status(200).send(items);
});

app.use('/users', userRoutes);

app.get('/products', async (req: Request, res: Response) => {
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
  '/create-checkout-session',
  async (req: Request<any, any, LineItem[], any>, res: Response) => {
    console.log(req.body);
    const products = req.body.map((e) => ({
      price: e.default_price?.id,
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: products,
      mode: 'payment',
      success_url: 'https://e-renaissance.herokuapp.com/home',
      cancel_url: 'https://e-renaissance.herokuapp.com/',
    });

    res.json(session.url);
  }
);

export default app;
