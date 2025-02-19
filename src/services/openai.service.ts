import OpenAI from "openai";
import { config } from "../config";

export type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: config.openai.apiKey,
    });
  }

  async generateChatCompletion(messages: ChatMessage[]) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: config.openai.model,
        messages,
        temperature: 0.7,
        max_tokens: 1000,
      });

      return {
        content: completion.choices[0].message.content,
        usage: completion.usage,
      };
    } catch (error) {
      console.error("OpenAI API Error:", error);
      throw error;
    }
  }

  async generateImage(prompt: string) {
    try {
      const response = await this.openai.images.generate({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      });

      return response.data[0].url;
    } catch (error) {
      console.error("OpenAI Image Generation Error:", error);
      throw error;
    }
  }
}
