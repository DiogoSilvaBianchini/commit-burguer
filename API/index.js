require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

const app = express()
const PORT = process.env.PORT

app.use(morgan("dev"))

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))