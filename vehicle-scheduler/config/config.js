require('dotenv').config();

module.exports = {
  BASE_URL: process.env.BASE_URL,
  TOKEN: process.env.TOKEN,
  LOCAL_TOKEN: process.env.LOCAL_TOKEN,
  PORT: process.env.PORT || 3000
};