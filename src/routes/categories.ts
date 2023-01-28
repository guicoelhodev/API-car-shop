import express, { Request, Response } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

// services

import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";
import { ListCategoryService } from "../modules/cars/services/ListCategoryService";

const categoriesRoutes = express.Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return response.status(201).json({ message: "category has been created" });
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
  const listCategoryService = new ListCategoryService(categoriesRepository);
  const allData = listCategoryService.execute();

  return response.status(200).json({ data: allData });
});

export { categoriesRoutes };
