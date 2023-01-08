import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();

export const createCategories = (request: Request, response: Response) => {
  const { name, description } = request.body;

  categoriesRepository.createCategory({ name, description });

  return response
    .status(201)
    .json({ message: "The categories has been created" });
};
