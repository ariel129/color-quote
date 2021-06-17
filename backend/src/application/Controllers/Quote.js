const QuoteService = require("../Services/Quote");

const quoteService = new QuoteService();

exports.generateQuote = async (req, res) => {
  try {
    const { isValid, message, data } = await quoteService.generateQuote(
      req,
      res
    );

    if (isValid === false) {
      return res.json({
        status: 201,
        message: message,
      });
    }

    return res.json({
      status: 200,
      message: message,
      data: data,
    });
  } catch (err) {
    return res.json({
      message: err.message,
      code: 400,
    });
  }
};
