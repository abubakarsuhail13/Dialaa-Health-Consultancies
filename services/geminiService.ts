import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert UAE Healthcare Licensing Assistant for Dialaa Health Consultancies, representing Dr. Maryam Ibraheem.
Your goal is to answer questions about medical licensing (DHA, MOH, HAAD/DOH) and setting up healthcare facilities in the UAE.

Context about Dialaa:
- Founder: Dr. Maryam Ibraheem (General Dentist, DHA license holder, Healthcare Specialist).
- Services: New license application, license activation/transfer, Dataflow verification, Exam booking (Prometric/Pearson VUE), Exam prep.
- Facility Setup: Medical Centers, Clinics, Hospitals, Aesthetic Clinics, Pharmacies, Laboratories, etc.

Be professional, knowledgeable, and encouraging. Always recommend booking a consultation for specific cases.
Keep responses concise and formatted with markdown.
`;

export const getGeminiResponse = async (prompt: string) => {
  try {
    // Initialize inside the function to ensure process.env.API_KEY is captured correctly from the injected define
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us directly at 055 719 8392 for immediate assistance.";
  }
};