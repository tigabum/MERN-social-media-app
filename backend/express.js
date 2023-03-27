//configuring express

// import express from "express";
const express = require("express");
// import cors from "cors";
const cors = require("cors");
// import bodyParser from "body-parser";
const bodyParser = require("body-parser");
// import cookieParser from "cookie-parser";
const cookieParser = require("cookie-parser");
// import compression from "compression";
const compression = require("compression");
// import helmet from "helmet";
const helmet = require("helmet");
// import userRoutes from './routes/user.routes'
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes)

app.get("/api/v1", (req, res) => res.status(200).send("Route working"));

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

// export default app;

module.exports = app;
