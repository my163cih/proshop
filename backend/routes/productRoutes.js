import express from "express";
import mongoose from "mongoose";
import { getProducts, getProductByID } from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductByID);

export default router;
