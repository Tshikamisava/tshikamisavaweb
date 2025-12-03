import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the client conditionally to avoid runtime crashes if key is missing (handled in UI)
const ai = apiKey ? new GoogleGenerativeAI(apiKey) : null;

/**
 * Uses Gemini to refine a rough business inquiry into a professional proposal.
 */
export const refineProposalWithAI = async (roughDraft: string, type: string): Promise<string> => {
  if (!ai) {
    console.warn("API Key not found. Returning original text.");
    return roughDraft;
  }

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `
      You are an expert business communication assistant for 'Tshikamisava Holdings', a premium software and design company.
      
      A user is writing a message regarding: ${type}.
      
      Here is their rough draft:
      "${roughDraft}"
      
      Please rewrite this message to be professional, concise, and persuasive. 
      Maintain the original intent but improve grammar, tone, and clarity. 
      Do not add placeholders. Just return the polished text.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text()?.trim() || roughDraft;
  } catch (error) {
    console.error("Error refining proposal:", error);
    return roughDraft; // Fallback to original on error
  }
};
