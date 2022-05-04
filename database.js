"use strict";
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose
    // .connect("mongodb://localhost/upload-files-database", { //
    .connect(
      // "mongodb+srv://newUser:3397998f@crud.dot0x.mongodb.net/upload-files?retryWrites=true&w=majority",
      process.env.MONGODB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    )
    .then(() => console.log("Connected to Mongodb......"));
};
