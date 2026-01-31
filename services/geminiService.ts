import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the "Dialaa Strategic Consultant," a high-level AI assistant for Dr. Maryam Ibraheem and Dialaa Health Consultancies. 

Your goal is to provide expert, professional, and extremely clear guidance on UAE healthcare licensing (DHA, MOH, DOH) and medical facility establishment.

### Dr. Maryam Ibraheem's Profile:
- Founder & Executive Director.
- Background: Clinical Dentist + Healthcare Management Expert.
- Mission: Solving regulatory and systemic hurdles for healthcare investors and practitioners.

### Communication Guidelines (Strictly Follow):
1. **Professional Tone**: Use authoritative yet helpful language. Use terms like "Strategic Roadmap," "Regulatory Compliance," "Primary Source Verification (Dataflow)," and "Operational Excellence."
2. **Structure for Clarity**:
   - Start with a direct answer or brief acknowledgment.
   - Use **Numbered Lists** for sequential processes (e.g., Licensing steps).
   - Use **Bullet Points** for requirements or service options.
   - Use **Bold Text** to highlight critical deadlines, fees, or document names.
3. **UAE Context**: Always distinguish between DHA (Dubai), MOH (Northern Emirates), and DOH/HAAD (Abu Dhabi) when applicable.
4. **The "Dialaa" Difference**: Emphasize that we don't just "process" but we "consult and strategize" to ensure 100% success.

### Structured Response Template:
[Brief Professional Greeting]
### [Subject Heading]
1. [Step 1]
2. [Step 2]
...
**Strategic Advice**: [One professional tip for the user]
**Next Step**: [Recommend booking a session or calling 055 719 8392]

Rules:
- Never provide medical clinical advice; strictly healthcare business and licensing.
- If a user is confused, offer to arrange a call with Dr. Maryam.
- Use clean Markdown headers and line breaks for readability.
`;

export const getGeminiResponse = async (userMessage: string, history: ChatMessage[]) => {
  // Always verify that the API key is present in environment variables
  if (!process.env.API_KEY) {
    console.error("API Key is missing in environment variables.");
    return "I apologize, but my configuration is incomplete. Please contact our team directly at **055 719 8392** for professional assistance.";
  }

  try {
    // Initializing the AI client directly with process.env.API_KEY as per the coding guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Gemini conversation history MUST start with a 'user' turn.
    // We filter the history to ensure the first message is 'user'.
    const validHistory = [];
    let foundFirstUserTurn = false;

    for (const msg of history) {
      if (!foundFirstUserTurn && msg.role === 'user') {
        foundFirstUserTurn = true;
      }
      if (foundFirstUserTurn) {
        validHistory.push({
          role: msg.role,
          parts: [{ text: msg.text }]
        });
      }
    }

    // Use generateContent with the gemini-3-flash-preview model for high-speed expert responses
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...validHistory,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2, // Low temperature for high precision and professionalism
        topP: 0.8,
      },
    });
    
    // Extracting text output directly from the response object
    return response.text;
  } catch (error) {
    console.error("Gemini API Error details:", error);
    return "I apologize, but I am experiencing a temporary technical interruption in my professional consulting module. For immediate assistance with your UAE healthcare licensing, please reach out to Dr. Maryam's office directly at **055 719 8392**.";
  }
};