require("dotenv").config()

const {DB_HOST, DB_NAME, DB_USERNAME, DB_PASSOWRD} = process.env


module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSOWRD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSOWRD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "postgres"
  }
}
