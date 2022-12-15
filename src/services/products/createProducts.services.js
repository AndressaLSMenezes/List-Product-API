import { database } from "../../database";
import { productsResponseSerializers } from "../../serializers/products.serializers";

const createProductsService = async (data) => {
  console.log(data);
  const queryResponse = await database.query(
    ` INSERT INTO 
            products(name, price, category_id)
        VALUES
        ($1, $2, $3)
        RETURNING *;
        `,
    [data.name, data.price, data.categoryId]
  );
  const returnProduct = await productsResponseSerializers.validate(
    queryResponse.rows[0]
  );

  return returnProduct
};

export default createProductsService;
