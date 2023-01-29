import express, { Request, Response } from "express";
import multer from "multer";

// controller

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = express.Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) =>
  createCategoryController.handle(request, response)
);

categoriesRoutes.get("/", (request: Request, response: Response) =>
  listCategoriesController.handle(request, response)
);

categoriesRoutes.post("/import", upload.single("file"), (request, response) =>
  importCategoryController.handle(request, response)
);

export { categoriesRoutes };
