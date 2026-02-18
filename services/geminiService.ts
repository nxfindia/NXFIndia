import { GoogleGenAI, Chat } from "@google/genai";
import { KNOWLEDGE_BASE } from "./knowledgeBase";

// Declare process for TypeScript since we are not using @types/node
declare var process: any;

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const initializeAI = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. AI features will not work.");
    return null;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const getChatSession = (): Chat => {
  const client = initializeAI();
  if (!client) {
    throw new Error("AI Client not initialized");
  }

  if (!chatSession) {
    const systemPrompt = `You are the intelligent assistant for NXF India (NilgirisNext Foundation). 
        
    Your Goal: Help users navigate the website, understand our festivals (ATOM, OSFF), and answer questions about our mission.
    
    Rules:
    1. Use the KNOWLEDGE BASE below to answer questions. 
    2. If the answer is not in the knowledge base, politely say you don't have that information and suggest they contact us at contact@nxfindia.org.
    3. Be polite, professional, and concise.
    4. When talking about festivals, encourage them to participate or submit films.
    
    *** KNOWLEDGE BASE ***
    ${KNOWLEDGE_BASE}`;

    chatSession = client.chats.create({ 
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: systemPrompt,
      }
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message: message });
    return result.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Reset session on error to clear potentially stuck state
    chatSession = null;
    return "I am currently experiencing connection issues. Please try again later.";
  }
};