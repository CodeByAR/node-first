const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
// middleware 'catchall
app.use("/", (req, res, next) => {
  // next is called to allow request to proceed to the next middleware
  // next();
  // res.status(404).send('<h2>Page Not Found!!</h2>');
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//Did before express.js
//const routes = require("./routes");
//console.log(routes.someText);
//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);
