import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoriesController from "../modules/cars/useCases/listCategories";

const categoryRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoryRoutes.get("/", (request, response) =>
  listCategoriesController().handle(request, response)
);

categoryRoutes.post("/", (request, response) =>
  createCategoryController().handle(request, response)
);

categoryRoutes.post("/import", upload.single("file"), (request, response) =>
  importCategoryController().handle(request, response)
);

export { categoryRoutes };
