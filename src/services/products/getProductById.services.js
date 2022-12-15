import { database } from "../../database";
import AppError from "../../errors/appError";

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

  if (!findProduct.rows) {
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

  return queryResponse.rows[0];
};

export default getProductByIdService;
