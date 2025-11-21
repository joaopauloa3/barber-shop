const mongoose = require("mongoose");

const URI =
  "mongodb+srv://jotapeemaria_db_user:Amoaallexia<3@cluster0.qgqeavz.mongodb.net/?appName=Cluster0";

mongoose
  .connect(URI)
  .then(() => console.log("DB is up!"))
  .catch(() => console.log(err));
