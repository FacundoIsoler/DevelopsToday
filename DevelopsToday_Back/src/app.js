const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");

const server = express();

server.name = "API";

server.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cookieParser());

server.use(morgan("dev"));

server.use("/", routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
