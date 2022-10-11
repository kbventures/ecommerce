import express from 'express';
import { deleteProduct,getAllProducts, getSingleProduct, updateProduct } from '../controllers/products.controller';

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id").put(updateProduct).get(getSingleProduct).delete(deleteProduct);

export default router;