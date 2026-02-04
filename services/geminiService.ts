import { GoogleGenAI, Type } from "@google/genai";
import { AIGeneratedIdea } from '../types';

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateCreativeIdeas = async (
  businessType: string,
  productType: string,
  imageDataUrl?: string
): Promise<AIGeneratedIdea[]> => {
  if (!ai) {
    console.warn("API Key missing for Gemini");
    return [
      { 
        slogan: "Qualidade que impressiona", 
        description: "Foco na durabilidade e acabamento.",
        colorPalette: "Azul e Branco",
        typography: "Sans Serif Moderna"
      },
      { 
        slogan: "Sua marca em destaque", 
        description: "Design arrojado para chamar atenção.",
        colorPalette: "Preto e Dourado",
        typography: "Serifada Clássica"
      }
    ];
  }

  let prompt = `
    Atue como um especialista em marketing e design gráfico.
    Eu tenho um cliente que possui um negócio/projeto do tipo: "${businessType}".
    Ele quer fazer um "${productType}".
    
    Gere 3 ideias criativas. Para cada ideia, forneça:
    1. Um slogan curto e impactante.
    2. Uma descrição detalhada do conceito visual.
    3. Sugestão de paleta de cores (ex: "Tons pastéis de Azul e Rosa").
    4. Sugestão de estilo tipográfico (ex: "Fonte manuscrita elegante").
    
    Retorne APENAS JSON.
  `;

  if (imageDataUrl) {
    prompt += " Analise a imagem fornecida e use-a como inspiração visual principal para as sugestões de cores e estilo.";
  }

  const parts: any[] = [{ text: prompt }];

  if (imageDataUrl) {
    const matches = imageDataUrl.match(/^data:(.+);base64,(.+)$/);
    if (matches) {
      parts.push({
        inlineData: {
          mimeType: matches[1],
          data: matches[2]
        }
      });
    }
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              slogan: { type: Type.STRING },
              description: { type: Type.STRING },
              colorPalette: { type: Type.STRING },
              typography: { type: Type.STRING }
            },
            required: ["slogan", "description", "colorPalette", "typography"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as AIGeneratedIdea[];

  } catch (error) {
    console.error("Error generating ideas:", error);
    return [];
  }
};