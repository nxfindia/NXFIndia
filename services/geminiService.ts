import { GoogleGenerativeAI, ChatSession } from "@google/generative-ai";
import { KNOWLEDGE_BASE } from "./knowledgeBase";

// Declare process for TypeScript since we are not using @types/node
declare var process: any;

const apiKey = process.env.API_KEY || '';

let genAI: GoogleGenerativeAI | null = null;
let chatSession: ChatSession | null = null;

const initializeAI = () => {
  if (!apiKey) {
    console.warn("API Key is missing. AI features will not work.");
    return null;
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(apiKey);
  }
  return genAI;
};

export const getChatSession = (): ChatSession => {
  const client = initializeAI();
  if (!client) {
    throw new Error("AI Client not initialized");
  }

  if (!chatSession) {
    // Using gemini-1.5-flash
    // Note: systemInstruction is passed via history to support older SDK versions defined in package.json
    const model = client.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });

    const systemPrompt = `You are the intelligent assistant for NXF India (NilgirisNext Foundation). 
        
    Your Goal: Help users navigate the website, understand our festivals (ATOM, OSFF), and answer questions about our mission.
    
    Rules:
    1. Use the KNOWLEDGE BASE below to answer questions. 
    2. If the answer is not in the knowledge base, politely say you don't have that information and suggest they contact us at contact@nxfindia.org.
    3. Be polite, professional, and concise.
    4. When talking about festivals, encourage them to participate or submit films.
    
    *** KNOWLEDGE BASE ***
    ${KNOWLEDGE_BASE}`;

    chatSession = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }]
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am ready to assist users with information about NXF India, the ATOM Film Festival, and the Ooty Short Film Festival based on the provided knowledge base." }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Reset session on error to clear potentially stuck state
    chatSession = null;
    return "I am currently experiencing connection issues. Please try again later.";
  }
};