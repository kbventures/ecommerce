import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/Product';

// @Desc Create new product
// @Route /products
// @Method POST
export const addProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.create(req.body);

  res.status(201).json(product);
});

// @Desc Get all products
// @Route /products
// @Method GET
export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await Product.find();

    res.status(201).json(product);
  }
);

// @Desc Get single Product
// @Route /products/:id
// @Method GET
export const getSingleProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await Product.find({ id: req.params.id });

    if (product.length === 0) {
      res.status(401);
      throw new Error('Product not found');
    }

    res.status(201).json(product);
  }
);
