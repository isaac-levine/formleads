export const config = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY as string,
    model: process.env.OPENAI_MODEL || "gpt-4-turbo-preview",
  },
};
