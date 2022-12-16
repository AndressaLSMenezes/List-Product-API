import { database } from "../../database";
import AppError from "../../errors/appError";
import { productsResponseSerializers } from "../../serializers/products.serializers";

const getProductByIdService = async (productId) => {
  const findProduct = await database.query(
    `
    SELECT
      *
    FROM
      products
    WHERE
      id = $1;
    `,
    [productId]
  );

  if (!findProduct.rows.length) {
    throw new AppError("Not found product", 404);
  }

  const queryResponse = await database.query(
    `
            SELECT 
                *
                FROM 
                    products 
                WHERE 
                    id = $1;
        `,
    [productId]
  );

  const returProduct = productsResponseSerializers.validate(
    queryResponse.rows[0]
  );

  return returProduct;
};

export default getProductByIdService;
