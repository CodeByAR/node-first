const express = require("express");
const path = require("path");

const rootDir = require('./../util/path');

const router = express.Router();

router.get("/", (req, res, next) => {
  // send is used to terminate the request flow and no further actions will be taken
  // res.sendFile(path.join(__dirname, '..','views', 'shop.html'));
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
