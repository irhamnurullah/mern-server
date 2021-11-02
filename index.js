const express = require("express");

const app = express();
const productRoutes = require("./src/routes/products");

app.use("/", productRoutes);

// GET '/users' ==> [{name: irham}]

app.listen(4000);
