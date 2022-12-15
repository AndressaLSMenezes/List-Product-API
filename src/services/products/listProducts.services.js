import { database } from "../../database";
import { listProductsSerializers } from "../../serializers/products.serializers";

const listProductsService = async () => {
  const queryResponse = await database.query(
    `  SELECT 
            *
            FROM 
            products;
        `
  );

  const returnListProduct = await listProductsSerializers.validate(
    queryResponse.rows
  );

  return returnListProduct;
};

export default listProductsService;
