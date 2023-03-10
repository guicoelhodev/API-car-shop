import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepositories = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositories);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
