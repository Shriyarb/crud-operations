const express = require("express");
const app = express();

app.use(express.static("public"));

const userModule = require("./user.module");
const productModule = require("./product.module");
const orderModule = require("./order.module");

app.use("/users", userModule);
app.use("/products", productModule);
app.use("/orders", orderModule);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});