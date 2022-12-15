import listProductsService from "../../services/products/listProducts.services";

const listProductsController = async (req, res) => {
  const data = await listProductsService();

  return res.status(200).json(data);
};

export default listProductsController;
