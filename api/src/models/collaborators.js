const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaborators = new Schema({
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

module.exports = mongoose.model("Collaborators", collaborators);
