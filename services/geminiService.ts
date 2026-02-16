import { GoogleGenAI, Chat } from "@google/genai";
import { KNOWLEDGE_BASE } from "./knowledgeBase";

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const initializeAI = () => {
  if (!apiKey) {
    console.warn("API Key is missing. AI features will not work.");
    return null;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const getChatSession = (): Chat => {
  const client = initializeAI();
  if (!client) {
    throw new Error("AI Client not initialized");
  }

  if (!chatSession) {
    chatSession = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are the intelligent assistant for NXF India (NilgirisNext Foundation). 
        
        Your Goal: Help users navigate the website, understand our festivals (ATOM, OSFF), and answer questions about our mission.
        
        Rules:
        1. Use the KNOWLEDGE BASE below to answer questions. 
        2. If the answer is not in the knowledge base, politely say you don't have that information and suggest they contact us at contact@nxfindia.org.
        3. Be polite, professional, and concise.
        4. When talking about festivals, encourage them to participate or submit films.
        
        *** KNOWLEDGE BASE ***
        ${KNOWLEDGE_BASE}`,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Reset session on error to clear potentially stuck state
    chatSession = null;
    return "I am currently experiencing connection issues. Please try again later.";
  }
};