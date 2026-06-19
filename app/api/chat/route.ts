// app/api/chat/route.ts
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

import { NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI only if API key exists
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

const systemPrompt = `You are Marvel AI, the virtual assistant for Marvel Creatives, a Harare-based creative agency. 

About Marvel Creatives:
- We offer: Branding, Graphic Design, Digital Marketing, Printing Solutions, Signage & Outdoor Ads, and Web Design
- Located in Harare, Zimbabwe
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
- Branding: Starting from $500
- Graphic Design: Starting from $200
- Digital Marketing: Starting from $300/month
- Printing Solutions: Starting from $100
- Signage & Outdoor Ads: Starting from $300
- Web Design: Starting from $500

If someone asks something you don't know, suggest they contact our team directly.`;

export async function POST(req: Request) {
  try {
    // Check if OpenAI is configured
    if (!openai) {
      return NextResponse.json(
        { 
          message: "I'm currently unavailable. Please contact us directly at info@marvelcreatives.com or +263 788 991 893. We'd love to hear from you! 🤝" 
        },
        { status: 503 }
      );
    }

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
      { 
        message: "I'm having trouble connecting. Please try again or contact us directly at info@marvelcreatives.com or +263 788 991 893. We're here to help! 💪" 
      },
      { status: 500 }
    );
  }
}