const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    price: { amount: Number, currency: String },
  },
  { versionKey: false }
);

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
