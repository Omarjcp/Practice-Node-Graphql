const ProductModel = require("../../database/models/Products");

const createProductController = async ({ input }) => {
  const {
    name,
    description,
    price: { amount, currency },
  } = input;

  const productToCreate = await new ProductModel({
    name,
    description,
    price: {
      amount: parseFloat(amount),
      currency,
    },
  });

  const productCreated = productToCreate.save();

  return productCreated;
};

module.exports = {
  createProductController,
};
