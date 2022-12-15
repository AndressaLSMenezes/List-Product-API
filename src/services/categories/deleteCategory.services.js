import { database } from "../../database";

const deleteCategoryService = async (categoryId) => {

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
    throw new AppError("Category already exists", 404);
  }


  const queryResponse = await database.query(
    `
    DELETE 
    FROM 
        categories c 
    WHERE 
        id = $1;
    `,
    [categoryId]
  );

  return queryResponse.rows;
};

export default deleteCategoryService;
