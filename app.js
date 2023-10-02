const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routers = require('./routers/routers');
// const bodyParser = require('body-parser');

require("./db/connection");

app.use(express.json());
app.use(routers)
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

 
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
