import { database } from "../../database";
import { productsResponseSerializers } from "../../serializers/products.serializers";
import AppError from "../../errors/appError";

const createProductsService = async (data) => {
  const findProduct = await database.query(
    `
    SELECT
      *
    FROM
      products
    WHERE
      name = $1;
    `,
    [data.name]
  );

  if (findProduct.rows.length) {
    throw new AppError("Product already exists", 400);
  }

  const queryResponse = await database.query(
    ` INSERT INTO 
            products(name, price, category_id)
        VALUES
        ($1, $2, $3)
        RETURNING *;
        `,
    [data.name, data.price, data.category_id]
  );

  const returnProduct = await productsResponseSerializers.validate(
    queryResponse.rows[0]
  );

  return returnProduct;
};

export default createProductsService;
