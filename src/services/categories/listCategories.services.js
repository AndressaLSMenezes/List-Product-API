import { database } from "../../database";
import { listCategoriesSerializers } from "../../serializers/categories.serializers";

const listCategoriesServices = async () => {
  const queryResponse = await database.query(
    `  SELECT 
        *
        FROM 
        categories;
    `
  );

  const returnListCategory = await listCategoriesSerializers.validate(
    queryResponse.rows
  );

  return returnListCategory;
};

export default listCategoriesServices;
