const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaborator = new Schema({
  barberShopId: {
    type: mongoose.Types.ObjectId,
    ref: "BarberShops",
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    default: "",
  },
  tel: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Collaborator", collaborator);
