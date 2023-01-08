import express from "express";
import { createCategories } from "../controllers/categories";

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", createCategories);

export { categoriesRoutes };
