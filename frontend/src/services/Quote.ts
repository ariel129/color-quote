import axios from "axios";
import { ColorProps } from "../types/ColorTypes";

export async function quoteColor(color: ColorProps, quote: string) {
  return await axios.post(`${process.env.REACT_APP_API}/quote/generate-quote`, {
    color,
    quote,
  });
}
