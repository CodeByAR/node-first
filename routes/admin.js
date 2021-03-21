const express = require("express");
const path = require("path");

const rootDir = require('./../util/path');

const router = express.Router();

router.get("/add-product", (req, res) => {
  //   res.send(
  //     '<form action="/product" method="POST"><input name="title" type="text"><button type="submit">Submit</button></form>'
  //   );
  //res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
