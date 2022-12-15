import deleteProductsService from "../../services/products/deleteProducts.services";

const deleteProductsController = async (req, res) => {
  const data = await deleteProductsService(req.params.id);

  return res.status(204).json(data);
};

export default deleteProductsController;
