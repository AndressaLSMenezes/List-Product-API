import * as yup from "yup";

const createProductsSerializers = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.number().required(),
});

const productsResponseSerializers = yup.object().shape({
  id: yup.string(),
  name: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.number().required(),
});

const listProductsSerializers = yup.array(productsResponseSerializers);

export {
  createProductsSerializers,
  listProductsSerializers, 
  productsResponseSerializers,
};
