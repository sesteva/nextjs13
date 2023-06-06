const compression = require("compression")
const express = require("express")
const morgan = require("morgan")
const { createMiddleware } = require("@mswjs/http-middleware")
const handlers = require("./handlers")
const seed = require("./seed")

const app = express()

app.use(compression())

app.use(express.json())

app.use(createMiddleware(...handlers))

app.use(morgan("tiny"))

const port = process.env.PORT || 3005

app.listen(port, () => {
  seed()
  console.log(`Express server listening on port ${port}`)
})
