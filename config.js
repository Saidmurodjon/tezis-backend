require("dotenv").config();
const { env } = process;
module.exports = {
  MONGODB: env.MONGODB_URL,
  PORT:env.PORT
};