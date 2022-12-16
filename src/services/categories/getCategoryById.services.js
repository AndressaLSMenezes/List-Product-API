import { database } from "../../database";
import { categoryResponseSerializers } from "../../serializers/categories.serializers";
import AppError from "../../errors/appError";

const getCategoryByIdServices = async (categoryId) => {
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
                categories c 
            WHERE 
                id = $1;
    `,
    [categoryId]
  );

  const returnCategory = categoryResponseSerializers.validate(
    queryResponse.rows[0]
  );

  return returnCategory;
};

export default getCategoryByIdServices;
