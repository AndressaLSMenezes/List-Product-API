import deleteCategoryService from "../../services/categories/deleteCategory.services";

const deleteCategoryController = async (req, res) => {
  const data = await deleteCategoryService(req.params.id);

  return res.status(204).json(data);
};

export default deleteCategoryController;