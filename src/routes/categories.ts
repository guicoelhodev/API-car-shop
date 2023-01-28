import express, { Request, Response } from "express";

// controller

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = express.Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
