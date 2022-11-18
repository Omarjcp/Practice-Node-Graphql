const ProductModel = require("../../database/models/Products");

const createProductController = async (req, res) => {
  try {
    const { name, description, amount, currency } = req.query;

    if (!name || !description || !amount || !currency) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const productToCreate = await new ProductModel({
      name,
      description,
      price: {
        amount: Number(amount),
        currency,
      },
    });

    const productCreated = await productToCreate.save();

    res.status(200).json({
      productCreated,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createProductController,
};
