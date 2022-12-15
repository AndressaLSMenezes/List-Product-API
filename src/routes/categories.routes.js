import { Router } from "express";

import validatedDataMiddleware from "../middlewares/validatedData.middlewares";

import { createCategorySerializers } from "../serializers/categories.serializers";

import updateCategoryController from "../controllers/categories/updateCategory.controllers";
import createCategoryController from "../controllers/categories/createCategories.controllers";
import deleteCategoryController from "../controllers/categories/deleteCategory.controllers";
import getCategoryByIdController from "../controllers/categories/getCategoryById.controllers";
import listCategoriesControllers from "../controllers/categories/listCategories.controllers";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  validatedDataMiddleware(createCategorySerializers),
  createCategoryController
);

categoriesRouter.get("", listCategoriesControllers);

categoriesRouter.get("/:id", getCategoryByIdController);

categoriesRouter.patch("/:id", updateCategoryController);

categoriesRouter.delete("/:id", deleteCategoryController);

export default categoriesRouter;
