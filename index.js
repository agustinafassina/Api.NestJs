const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Estamos listos! :D");
});

app.listen(3012, function () {
  console.log("Corriento por el puerto 3012!");
});