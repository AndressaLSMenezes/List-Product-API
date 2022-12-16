import { database } from "../../database";

const getProductsByCategoryService = async (categoryId) => {
  const queryResponse = await database.query(
    `
    SELECT  
      p.name, p.price, c.name AS category
    FROM 
      products AS p
    JOIN 
      categories AS c ON p.category_id = c.id
    WHERE c.id = $1;
    `,
    [categoryId]
  );

  return queryResponse.rows;
};

export default getProductsByCategoryService;
