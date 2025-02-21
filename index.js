// Step 01: Express Import
const express = require("express");
// Import Mongoose;
const mongoose = require("mongoose");

// Import User From Routes
const userRoute = require("./routes/user");

// Step 03: Path import
const path = require("path");
const { log } = require("console");

// Step 02: Create instant
const app = express();

// Conenct Mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/blogsphere")
  .then((e) => console.log("MongooseDB Connected"));

// Step 04: EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middlware for form handle 
app.use(express.urlencoded({extended:false}));

// For test Routes
app.get("/", (req, res) => {
  res.render("home");
});

// UseRoute
app.use("/user", userRoute);

// Port
const PORT = 8000;

// Run Server
app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
