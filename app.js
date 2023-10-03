const express = require("express");
const app = express();

const routers = require("./routers/routers");
const config = require("dotenv");
const connectDB = require("./db/connection");
config.config({ path: "./config/config.env" });
// const bodyParser = require('body-parser');
require("./db/connection");

app.use(express.json());
app.use(routers);

connectDB()

// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});
