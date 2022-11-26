const ProductModel = require("../../database/models/Products");

const deleteProductController = async ({ id }) => {
  console.log(id);
  const productToDelete = await ProductModel.findById({ _id: id });

  await ProductModel.deleteOne({ _id: id });

  return productToDelete;
};

module.exports = {
  deleteProductController,
};
