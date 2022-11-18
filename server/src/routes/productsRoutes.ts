import express from "express";
import { addProduct, getAllProducts, getSingleProduct} from '../controllers/productsControllers';

const router = express.Router();



router.route("/").get(getAllProducts).post(addProduct);
router.route("/:id").get(getSingleProduct);


export default router;