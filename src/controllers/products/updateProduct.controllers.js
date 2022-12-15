import updateProductService from "../../services/products/updateProduct.services";

const updateProductController = async (req, res) => {
  const data = await updateProductService(req.body, req.params.id);

  return res.status(200).json(data);
};

export default updateProductController;
