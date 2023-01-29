import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationuseCase: ListSpecificationUseCase) {}

  handle(_: Request, response: Response): Response {
    const specifications = this.listSpecificationuseCase.execute();

    return response.status(200).json({
      data: specifications,
    });
  }
}

export { ListSpecificationController };
