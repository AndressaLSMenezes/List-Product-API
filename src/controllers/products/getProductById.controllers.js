import getProductByIdService from "../../services/products/getProductById.services";

const getProductByIdController = async (req, res) => {
  const data = await getProductByIdService(req.params.id);

  return res.status(200).json(data);
};

export default getProductByIdController;
