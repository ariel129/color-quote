const Canvas = require("canvas");

class QuoteService {
  async generateQuote(req, res) {
    const { color, quote } = req.body;
    const { hue, saturation, brightness, alpha } = color;

    let rgb2hex = (r, g, b, a) =>
      "#" +
      [r, g, b, a]
        .map((x) =>
          Math.round(x * 255)
            .toString(16)
            .padStart(2, 0)
        )
        .join("");

    const resColor = hsl2rgb(hue, saturation, brightness);

    let textColor = rgb2hex(
      resColor.hue,
      resColor.saturation,
      resColor.brightness,
      alpha
    );

    var canvas = Canvas.createCanvas(1000, 500);
    var ctx = canvas.getContext("2d");

    ctx.font = "italic bold 72px 'Lato', sans-serif";
    ctx.fillStyle = `${textColor}`;

    ctx.textAlign = "center";
    ctx.fillText(quote, canvas.width / 2, canvas.height / 2);

    ctx.textAlign = "center";

    ctx.beginPath();

    return {
      isValid: true,
      message: "Success",
      data: {
        dataUri: canvas.toDataURL(),
      },
    };
  }
}

function hsl2rgb(h, s, l) {
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  return {
    hue: f(0),
    saturation: f(8),
    brightness: f(4),
  };
}

module.exports = QuoteService;
