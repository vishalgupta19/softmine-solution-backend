const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.PORT || 8080,
  api_url: `http://localhost:${process.env.API_URL}` || "http://localhost:8080"
};
