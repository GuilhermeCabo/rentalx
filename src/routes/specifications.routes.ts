import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.get("/", (request, response) =>
  listSpecificationsController.handle(request, response)
);

specificationRoutes.post("/", (request, response) =>
  createSpecificationController.handle(request, response)
);

export { specificationRoutes };
