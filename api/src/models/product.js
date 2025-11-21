const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
  barberShopId: {
    type: mongoose.Types.ObjectId,
    ref: "BarberShops",
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "Categories",
  },
  brandId: {
    type: mongoose.Types.ObjectId,
    ref: "Brands",
  },
  title: {
    type: String,
    required: [true, "Title product is required"],
  },
  sku: {
    type: String,
    required: [true, "SKU product is required"],
  },
  barCode: {
    type: String,
    required: [true, "Bar code product is required"],
  },
  color: {
    type: String,
    required: [true, "Color product is required"],
  },
  size: {
    type: String,
    required: [true, "Size product is required"],
  },
  price: {
    type: Number,
    required: [true, "Price product is required"],
  },
});

module.exports = mongoose.model("Product", product);
