let { Router } = require("express");

const quote = Router();
const quoteController = require("../application/Controllers/Quote");

// Generate a quote
quote.post("/generate-quote", quoteController.generateQuote);

module.exports = quote;
