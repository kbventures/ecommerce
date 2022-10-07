import express from "express";
// import { getAll, getSingle, addProduct, updateProduct, deleteProduct, createProductReview} from '../controllers/productsControllers';
import { addProduct} from '../controllers/productsControllers';

const router = express.Router();



router.route("/").post(addProduct);



// router.route("/").get(getAll).post(addProduct);
// router.route("/:id/reviews").post(createProductReview);
// router.route("/:id").get(getSingle).put(updateProduct).delete(deleteProduct);

export default router;