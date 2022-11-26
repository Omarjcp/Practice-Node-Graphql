const ProductModel = require("../../database/models/Products");

const getProductController = async ({ id }) => {
  const product = await ProductModel.findById({ _id: id });

  return product;
};

module.exports = {
  getProductController,
};
