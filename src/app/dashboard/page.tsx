"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Dashboard() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ to: string; text: string }[]>([]);

  const handleSendMessage = async () => {
    // TODO: Implement actual SMS sending
    setMessages([...messages, { to: phoneNumber, text: message }]);
    setMessage("");
  };

  const handleGenerateAI = async () => {
    // TODO: Implement AI generation
    const aiResponse =
      "This is a sample AI response. Replace with actual AI integration.";
    setMessage(aiResponse);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Message Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Phone Number
              </label>
              <Input
                placeholder="+1234567890"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <Textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleGenerateAI} variant="outline">
                Generate AI Response
              </Button>
              <Button onClick={handleSendMessage}>Send Message</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Message History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="text-sm text-muted-foreground">
                    To: {msg.to}
                  </div>
                  <div className="mt-2">{msg.text}</div>
                </div>
              ))}
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground">
                  No messages sent yet
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
