import { ChatMessage } from "@/services/openai.service";

interface APIRequestData {
  messages: ChatMessage[] | string;
  type: "chat" | "image";
}

export class OpenAIClient {
  private async fetchAPI(endpoint: string, data: APIRequestData) {
    const response = await fetch(`/api/ai/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "API request failed");
    }

    return response.json();
  }

  async generateChatCompletion(messages: ChatMessage[]) {
    return this.fetchAPI("", {
      messages,
      type: "chat",
    });
  }

  async generateImage(prompt: string) {
    return this.fetchAPI("", {
      messages: prompt,
      type: "image",
    });
  }
}

// Create a singleton instance for easy import
export const openAIClient = new OpenAIClient();
