import express from "express";
import "express-async-errors";
import categoriesRouter from "./routes/categories.routes";
import productsRouter from "./routes/products.routes";
import handleAppError from "./middlewares/handleAppError.middlewares";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use(handleAppError);

export default app;
