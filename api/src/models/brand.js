const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brand = new Schema({
  barberShopId: {
    type: mongoose.Types.ObjectId,
    ref: "BarberShops",
  },
  title: {
    type: String,
    required: [true, "Title brand is required"],
  },
});

module.exports = mongoose.model("Brand", brand);
