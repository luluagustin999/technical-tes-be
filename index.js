require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/routes.js")
const bodyParser = require("body-parser")
const cors = require("cors")
const createError = require("http-errors")

// Init Express
const app = express()

// Use module express
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Use Route
app.get("/", (req, res) => {
  res.send("Welcome to my rest API :), use /api endpoint to fetch data")
})
app.use("/api", route)

// Connect MongoDB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Database Connected"))

// Express create error 404
app.use((req, res, next) => {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log("Connected to port " + port)
})
