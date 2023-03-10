import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const createCategoryUseCase = this.createCategoryUseCase;
    createCategoryUseCase.execute({ name, description });

    return response.status(201).json({ message: "category has been created" });
  }
}

export { CreateCategoryController };
