const ProductModel = require("../../database/models/Products");

const updateProductController = async ({ input }) => {
  let { _id, name, description, price } = input;

  const product = await ProductModel.findById({ _id });

  await ProductModel.updateOne(
    { _id },
    {
      $set: {
        name: name ? name : product?.name,
        description: description ? description : product.description,
        price: {
          amount: price?.amount
            ? parseFloat(price?.amount)
            : product.price.amount,
          currency: price?.currency ? price?.currency : product.price.currency,
        },
      },
    }
  );

  const productUpd = await ProductModel.findById({ _id });

  return productUpd;
};

module.exports = {
  updateProductController,
};
