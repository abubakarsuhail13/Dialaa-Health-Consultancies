import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Dialaa Health Consultancies. I am your strategic assistant for UAE healthcare licensing. How may I assist your professional journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Corrected typo in scrollIntoView call to properly reference the DOM node
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    // Safe scroll to bottom
    const container = document.getElementById('chat-messages-container');
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessageText = input.trim();
    const newUserMessage: ChatMessage = { role: 'user', text: userMessageText };
    
    setInput('');
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    const responseText = await getGeminiResponse(userMessageText, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText || '' }]);
    setIsLoading(false);
  };

  // Helper function to render text with professional formatting
  const renderMessageContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Headers
      if (line.startsWith('###')) {
        return <h3 key={i} className="text-teal-700 font-bold text-base mt-4 mb-2">{line.replace('###', '').trim()}</h3>;
      }
      // Bold text
      // Fixed: Replaced JSX.Element with React.JSX.Element to fix "Cannot find namespace 'JSX'" error
      let processedLine: (string | React.JSX.Element)[] = [line];
      const boldRegex = /\*\*(.*?)\*\*/g;
      
      if (line.includes('**')) {
        const parts = line.split(boldRegex);
        processedLine = parts.map((part, index) => 
          index % 2 === 1 ? <strong key={index} className="font-bold text-slate-900">{part}</strong> : part
        );
      }

      // List items
      if (line.trim().match(/^\d+\./) || line.trim().startsWith('-') || line.trim().startsWith('•')) {
        return <div key={i} className="ml-2 mb-1.5 pl-3 border-l-2 border-teal-100 py-0.5">{processedLine}</div>;
      }

      return <p key={i} className="mb-2 last:mb-0 leading-relaxed">{processedLine}</p>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[480px] h-[650px] rounded-[2.5rem] shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-slate-900 p-6 flex justify-between items-center text-white shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg border border-teal-500/30">D</div>
              <div>
                <p className="font-bold text-base tracking-tight">Dialaa Strategic AI</p>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] opacity-70 uppercase tracking-[0.15em] font-black">Expert Active</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2.5 rounded-2xl transition-all active:scale-90"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div id="chat-messages-container" className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] rounded-[1.5rem] px-5 py-4 text-sm ${
                  m.role === 'user' 
                    ? 'bg-teal-600 text-white rounded-tr-none shadow-lg shadow-teal-600/20' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-md ring-1 ring-slate-100'
                }`}>
                  <div className="whitespace-pre-wrap">
                    {renderMessageContent(m.text)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-[1.5rem] rounded-tl-none px-6 py-4 shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-150" />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-300" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-slate-100">
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Dialaa Strategic AI..."
                className="w-full bg-slate-50 border border-slate-200 pl-5 pr-14 py-4 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all font-medium placeholder:text-slate-400"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 bg-teal-600 text-white px-4 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 disabled:opacity-40 disabled:shadow-none active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
            <div className="flex justify-between items-center mt-4 px-2">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Dialaa Strategy Engine</p>
              <div className="flex items-center space-x-3">
                <a href="tel:0557198392" className="text-[11px] text-teal-600 font-black hover:underline uppercase tracking-tighter">Support</a>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Active</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-teal-600 text-white rounded-[1.25rem] shadow-2xl flex items-center justify-center hover:scale-110 hover:-translate-y-2 active:scale-95 transition-all duration-500 ease-out"
        >
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-400 rounded-full border-[3px] border-white animate-pulse shadow-sm"></div>
          <svg className="w-9 h-9 group-hover:rotate-12 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="absolute -left-32 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
            Consult AI
          </div>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;