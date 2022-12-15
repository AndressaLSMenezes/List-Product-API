import listCategoriesServices from "../../services/categories/listCategories.services";

const listCategoriesControllers = async (req, res) => {
  const data = await listCategoriesServices();

  return res.status(200).json(data);
};

export default listCategoriesControllers;
