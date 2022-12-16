import getProductsByCategoryService from "../../services/products/getProductsByCategory.services";

const getProductsByCategoryController = async (req, res) => {
  const data = await getProductsByCategoryService(req.params.category_id);

  return res.status(200).json(data);
};

export default getProductsByCategoryController;
