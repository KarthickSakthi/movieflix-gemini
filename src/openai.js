import OpenAI from "openai/index.mjs";
import {OPENAI_KEY} from "./constants.js";
const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;