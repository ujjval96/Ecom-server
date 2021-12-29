import { Router } from "express";

import ProductController from "./Controller";

const router = Router();
const productController = ProductController.getInstance();

router.route("/")
  .post(productController.createProduct);

router.route("/type")
  .get(productController.getType);

router.route("/:type")
  .get(productController.getProduct);

export default router;