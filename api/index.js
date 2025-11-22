const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("./database");

const barberShop = require("./src/routes/barber-shop.routes");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/barber-shop", barberShop);

// VARIABLES
app.set("port", 8000);
app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
