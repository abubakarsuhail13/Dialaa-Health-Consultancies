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
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Map existing history to the format expected by the API
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Add the current user message
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Lower temperature for more consistent professional responses
        topP: 0.8,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am experiencing a technical interruption. For immediate professional assistance regarding your healthcare licensing, please contact our team directly at **055 719 8392**.";
  }
};