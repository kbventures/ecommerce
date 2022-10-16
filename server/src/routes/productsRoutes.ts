import express from "express";
// import { getAll, getSingle, addProduct, updateProduct, deleteProduct, createProductReview} from '../controllers/productsControllers';
import { addProduct, getAllProducts, getSingleProduct} from '../controllers/productsControllers';

const router = express.Router();



router.route("/").get(getAllProducts).post(addProduct);
router.route("/:id").get(getSingleProduct);


// router.route("/:id/reviews").post(createProductReview);
// router.route("/:id").put(updateProduct).delete(deleteProduct);

export default router;