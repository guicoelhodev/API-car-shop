import { Router, Request, Response } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request: Request, response: Response) =>
  createSpecificationController.handle(request, response)
);

specificationsRoutes.get("/", (request: Request, response: Response) =>
  listSpecificationController.handle(request, response)
);
