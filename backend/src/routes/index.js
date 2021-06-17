let express = require("express");

const api = express();

const quote = require("./Quote");

// Routes which should handle requests
api.use("/quote", quote);

module.exports = api;
