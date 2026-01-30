
export interface ServiceItem {
  title: string;
  items: string[];
  icon: string;
}

export interface Competency {
  title: string;
  description: string;
}

// ChatMessage interface used by the AI chatbot component
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
