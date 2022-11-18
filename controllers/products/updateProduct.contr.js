const ProductModel = require("../../database/models/Products");

const updateProductController = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const { name, description, amount, currency } = req.query;

    if (!_id) {
      return res.status(400).json({
        message: "Identify of product is required",
      });
    }

    if (!name && !description && !amount && !currency) {
      return res.status(400).json({
        message: "Any field is required",
      });
    }

    const productUpdated = await ProductModel.updateOne(
      { _id },
      {
        $set: {
          name,
          description,
          price: {
            amount: Number(amount),
            currency,
          },
        },
      }
    );

    res.status(200).json({
      message: "Product updated successful",
      productUpdated,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  updateProductController,
};
