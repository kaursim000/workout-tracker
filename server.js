const express = require('express')
const router = require("express").Router();
const workout = require("./models/workout.js");
const mongoose = require("mongoose");
const path = require('path')


const app = express();
// const routes = require("./routes/index.js");
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.use(express.static("public"))

const apiRoutes = require('./routes/api-routes');
// import apiRoutes from './routes/api-routes'

app.use(apiRoutes)

mongoose.connect(
  process.env.MONGODB_URI || process.env.MLAB_URI || "mongodb://localhost/workoutdb",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});