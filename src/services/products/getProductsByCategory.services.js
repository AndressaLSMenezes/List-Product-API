import { database } from "../../database";

const getProductsByCategoryService = async (categoryId) => {

  const findCategory = await database.query(
    `
    SELECT
      *
    FROM
      categories
    WHERE
      id = $1;
    `,
    [categoryId]
  );

  if (!findCategory.rows.length) {
    throw new AppError("Not found category", 404);
  }

  const queryResponse = await database.query(
    `
      SELECT 
          *
          FROM 
              products 
          WHERE 
              category_id = $1;
    `,
    [categoryId]
  );

  return queryResponse.rows;
};

export default getProductsByCategoryService;
