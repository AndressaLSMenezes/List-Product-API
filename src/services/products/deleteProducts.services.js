import { database } from "../../database";

const deleteProductsService = async (productId) => {
  const findCategory = await database.query(
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

  if (!findCategory.rows.length) {
    throw new AppError("Category already exists", 404);
  }

  const queryResponse = await database.query(
    `
        DELETE 
        FROM 
            products 
        WHERE 
            id = $1;
        `,
    [productId]
  );

  return queryResponse.rows;
};

export default deleteProductsService;
