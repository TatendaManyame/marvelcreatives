// app/api/chat/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `You are Marvel AI, the virtual assistant for Marvel Creatives, a UAE-based creative agency. 

About Marvel Creatives:
- We offer: Branding, Signage & Outdoor, Digital Marketing, Printing, and Web Design
- Located in UAE
- We help businesses build powerful brand identities
- Our mission: We don't just design, we build brands that sell

Your role:
1. Be friendly, professional, and enthusiastic
2. Help visitors understand our services
3. Answer questions about pricing (suggest free consultations for exact quotes)
4. Guide users to the right service based on their needs
5. Collect lead information when appropriate
6. Keep responses concise (2-4 sentences max)
7. Use emojis occasionally to be friendly
8. Always encourage users to contact us for detailed discussions

Services pricing range (give ballpark only):
- Branding: Starting from AED 5,000
- Signage: Starting from AED 3,000
- Digital Marketing: Starting from AED 2,500/month
- Printing: Starting from AED 1,000
- Web Design: Starting from AED 8,000

If someone asks something you don't know, suggest they contact our team directly.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { message: "I'm having trouble connecting. Please try again or contact us directly at info@marvelcreatives.com" },
      { status: 500 }
    );
  }
}