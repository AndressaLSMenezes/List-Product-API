import { database } from "../../database";
import { productsResponseSerializers } from "../../serializers/products.serializers";
import AppError from "../../errors/appError";

const updateProductService = async (productData, productId) => {
  const findProduct = await database.query(
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

  if (!findProduct.rows) {
    throw new AppError("Not found product", 404);
  }

  let query = "UPDATE products SET ";

  const keys = Object.keys(productData);
  const values = Object.values(productData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

  const queryResponse = await database.query(query, [...values, productId]);

  const returnProduct = await productsResponseSerializers.validate(
    queryResponse.rows[0]
  );

  return returnProduct;
};

export default updateProductService;
