import { Request, Response } from "express";

let products = [
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

// @Desc Get all products
// @Route /api/products
// @Method GET
export const getAllProducts = (req: Request, res: Response) => {
  res.status(201).json(products);
};

// @Desc Get single product by ID
// @Route /api/products/:id
// @Method GET
export const getSingleProduct = (req: Request, res: Response) => {
  const product = products.find((product) => product.id === req.params.id);

  if (!product) {
    res.status(401);
    throw new Error("Product not found");
  }
  res.status(201).json(product);
};

// @Desc Update product by ID
// @Route /api/products/:id
// @Method PUT
export const updateProduct = (req: Request, res: Response) => {
  const productIndex = products.findIndex(product => product.id === req.params.id);
  products[productIndex] = req.body;
  res.status(201).json(products[productIndex])
};

// @Desc Delete product by ID
// @Route /api/products/:id
// @Method DELETE
export const deleteProduct = (req: Request, res: Response) => {
  products = products.filter(product => product.id !== req.params.id);
  res.status(201).json({})
};
