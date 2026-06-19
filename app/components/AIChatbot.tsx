"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, X, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm Marvel AI, your creative assistant. I can help you with branding, signage, marketing, printing, and web design. How can I assist you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setShowContact(false);

    // Check for contact-related queries
    const lowerText = textToSend.toLowerCase();
    if (
      lowerText.includes("contact") ||
      lowerText.includes("email") ||
      lowerText.includes("phone") ||
      lowerText.includes("call") ||
      lowerText.includes("address") ||
      lowerText.includes("location")
    ) {
      setShowContact(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Here's how you can reach us:",
        },
      ]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      // Fallback responses if API is unavailable
      const fallbackResponse = getFallbackResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: fallbackResponse,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("service") || q.includes("offer")) {
      return "We offer a complete range of creative services:\n\n🎨 **Branding** - Logo design, brand identity, brand strategy\n🏗️ **Signage** - Indoor/outdoor signs, billboards, vehicle wraps\n📱 **Digital Marketing** - SEO, social media, PPC campaigns\n🖨️ **Printing** - Business cards, brochures, banners, packaging\n💻 **Web Design** - Websites, landing pages, e-commerce\n\nWhich service interests you?";
    }
    
    if (q.includes("cost") || q.includes("price") || q.includes("pricing")) {
      return "Our pricing is customized for each project. Here are some starting points:\n\n• Branding packages from AED 5,000\n• Signage from AED 3,000\n• Digital Marketing from AED 2,500/month\n• Web Design from AED 8,000\n\nWould you like a free consultation for an exact quote?";
    }
    
    if (q.includes("portfolio") || q.includes("work") || q.includes("projects")) {
      return "We're proud of our portfolio! You can view our work at the Portfolio section on our website. We've worked with businesses across UAE in retail, real estate, F&B, and more. Would you like to see examples from a specific industry?";
    }
    
    if (q.includes("start") || q.includes("begin") || q.includes("process")) {
      return "Getting started is easy! Here's our process:\n\n1️⃣ **Free Consultation** - Tell us about your project\n2️⃣ **Proposal** - We create a custom plan & quote\n3️⃣ **Design** - Our team brings your vision to life\n4️⃣ **Review** - You provide feedback\n5️⃣ **Launch** - We deliver the final product\n\nReady to start? Let's schedule a call!";
    }
    
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! 👋 Welcome to Marvel Creatives. I'm here to help you with any questions about our branding, signage, marketing, or web design services. What can I help you with today?";
    }
    
    return "That's a great question! I'd love to help. Could you tell me more about your project or what services you're interested in? You can also reach our team directly at info@marvelcreatives.com or call +971 50 123 4567. 😊";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    { text: "What services do you offer?", icon: "🎨" },
    { text: "How much does branding cost?", icon: "💰" },
    { text: "Show me your portfolio", icon: "✨" },
    { text: "How to get started?", icon: "🚀" },
    { text: "Contact information", icon: "📞" },
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-36 right-6 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-600/30 transition-all duration-300 hover:scale-110 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <MessageCircle size={24} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full animate-ping opacity-75" />
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-48 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[550px] max-h-[calc(100vh-12rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-slide-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 text-white flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                  <Bot size={20} />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Marvel AI Assistant</h3>
                  <p className="text-xs text-red-100">Typically replies instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setMessages([messages[0]]);
                    setShowContact(false);
                  }}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition"
                  title="Clear chat"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white chat-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white rounded-br-md"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {msg.role === "assistant" ? (
                      <Bot size={14} className="text-red-600 flex-shrink-0" />
                    ) : (
                      <User size={14} className="text-white flex-shrink-0" />
                    )}
                    <span className="text-xs font-semibold opacity-75">
                      {msg.role === "assistant" ? "Marvel AI" : "You"}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" />
                  </div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            {showContact && (
              <div className="animate-fade-in bg-white border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
                <a href="tel:+971501234567" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Call Us</p>
                    <p className="text-sm text-gray-600">+971 50 123 4567</p>
                  </div>
                </a>
                <a href="mailto:info@marvelcreatives.com" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Email Us</p>
                    <p className="text-sm text-gray-600">info@marvelcreatives.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition cursor-pointer">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Visit Us</p>
                    <p className="text-sm text-gray-600">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && !showContact && (
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex-shrink-0">
              <p className="text-xs text-gray-500 mb-2 font-medium">Frequently asked:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q.text)}
                    className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-red-50 hover:border-red-300 transition-colors text-gray-700"
                  >
                    {q.icon} {q.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 text-sm transition-all"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="p-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full hover:from-red-700 hover:to-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-lg shadow-red-600/20"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center gap-1">
              <Bot size={12} />
              Powered by AI • Marvel Creatives UAE
            </p>
          </div>
        </div>
      )}
    </>
  );
}