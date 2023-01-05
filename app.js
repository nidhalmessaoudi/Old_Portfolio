require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const generalRoutes = require("./routes/general");

function main() {
  const app = express();

  app.set("view engine", "ejs");

  app.use(express.json());
  app.use(express.static("public"));

  app.use(generalRoutes);

  app.use((req, res) => {
    res.status(404).render("404Page");
  });

  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3000;
  }

  app.listen(port, function () {
    console.log("Server has started Successfully.");
  });
}

mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(main)
  .catch((err) => {
    console.log(err);
  });
