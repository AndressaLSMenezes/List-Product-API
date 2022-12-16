import { database } from "../../database";
import { categoryResponseSerializers } from "../../serializers/categories.serializers";
import AppError from "../../errors/appError";

const updateCategoryService = async (categoryData, categoryId) => {
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

  let query = "UPDATE categories SET ";
  const keys = Object.keys(categoryData);
  const values = Object.values(categoryData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

  const queryResponse = await database.query(query, [...values, categoryId]);

  const returnCategory = await categoryResponseSerializers.validate(
    queryResponse.rows[0]
  );

  return returnCategory;
};

export default updateCategoryService;
