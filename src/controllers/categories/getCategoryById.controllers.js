import getCategoryByIdServices from "../../services/categories/getCategoryById.services";

const getCategoryByIdController = async (req, res) => {
  const data = await getCategoryByIdServices(req.params.id);

  return res.status(200).json(data);
};

export default getCategoryByIdController;
