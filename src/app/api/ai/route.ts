import { NextRequest, NextResponse } from "next/server";
import { OpenAIService, ChatMessage } from "@/services/openai.service";

const openAIService = new OpenAIService();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, type = "chat" } = body;

    if (!messages) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    let response;
    if (type === "chat") {
      response = await openAIService.generateChatCompletion(
        messages as ChatMessage[]
      );
    } else if (type === "image") {
      if (typeof messages === "string") {
        response = await openAIService.generateImage(messages);
      } else {
        response = await openAIService.generateImage(messages[0].content);
      }
    } else {
      return NextResponse.json(
        { error: "Invalid generation type" },
        { status: 400 }
      );
    }

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
      { error: "Unknown error occurred" },
      { status: 500 }
    );
  }
}
