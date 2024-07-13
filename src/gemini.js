import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constants";

const genAi = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash-latest",
});

export default model;