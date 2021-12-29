import { product, user } from "./controller";
import { Router } from "express";

const router = Router();

router.use("/product", product);
router.use("/user", user)

export default router;