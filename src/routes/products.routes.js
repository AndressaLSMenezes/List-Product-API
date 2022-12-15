import { Router } from "express";

import validatedDataMiddleware from "../middlewares/validatedData.middlewares";
import { createProductsSerializers } from "../serializers/products.serializers";

import updateProductController from "../controllers/products/updateProduct.controllers";
import createProductsControllers from "../controllers/products/createProducts.controllers";
import deleteProductsController from "../controllers/products/deleteProducts.controllers";
import getProductByIdController from "../controllers/products/getProductById.controllers";
import listProductsController from "../controllers/products/listProducts.controllers";
import getProductsByCategoryController from "../controllers/products/getProductsByCategory.controllers";

const productsRouter = Router();

productsRouter.post(
  "",
  validatedDataMiddleware(createProductsSerializers),
  createProductsControllers
);

productsRouter.get("", listProductsController);
productsRouter.get("/:id", getProductByIdController);

productsRouter.patch("/:id", updateProductController);

productsRouter.delete("/:id", deleteProductsController);
productsRouter.get("/category/:categoryId", getProductsByCategoryController);

export default productsRouter;
