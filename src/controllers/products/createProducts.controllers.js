import createProductsService from "../../services/products/createProducts.services";

const createProductsControllers = async (req, res) => {
  const data = await createProductsService(req.body);

  return res.status(201).json(data);
};

export default createProductsControllers;
