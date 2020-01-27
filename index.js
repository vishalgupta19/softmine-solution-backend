const express = require("express");
const bodyParser = require("body-parser");
const { port } = require("./config");
const app = express();
app.use(express.urlencoded());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});
