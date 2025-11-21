const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  barberShopId: {
    type: mongoose.Types.ObjectId,
    ref: "BarberShop",
  },
  title: {
    type: String,
    required: [true, "Title service is required"],
  },
  price: {
    type: Number,
    required: [true, "Price service is required"],
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Products", products);
