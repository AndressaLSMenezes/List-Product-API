import { database } from "../../database";
import AppError from "../../errors/appError";
import { categoryResponseSerializers } from "../../serializers/categories.serializers";

const createCategoryService = async (data) => {
  const findCategory = await database.query(
    `
    SELECT
      *
    FROM
      categories
    WHERE
      name = $1;
    `,
    [data.name]
  );

  if (findCategory.rows.length > 0) {
    throw new AppError("Category already exists", 400);
  }

  const queryResponse = await database.query(
    ` INSERT INTO 
              categories(name)
          VALUES
          ($1)
          RETURNING *;
          `,
    [data.name]
  );

  const returnCategory = await categoryResponseSerializers.validate(
    queryResponse.rows[0]
  );

  return returnCategory;
};

export default createCategoryService;
