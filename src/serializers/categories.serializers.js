import * as yup from "yup";

const createCategorySerializers = yup.object().shape({
  name: yup.string().required(),
});

const categoryResponseSerializers = yup.object().shape({
  id: yup.number(),
  name: yup.string().required(),
});

const listCategoriesSerializers = yup.array(categoryResponseSerializers);

export {
  createCategorySerializers,
  listCategoriesSerializers,
  categoryResponseSerializers,
};
