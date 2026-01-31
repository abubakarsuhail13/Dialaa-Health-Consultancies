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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
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

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[450px] h-[600px] rounded-3xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-slate-900 p-5 flex justify-between items-center text-white shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center font-black text-lg shadow-lg">D</div>
              <div>
                <p className="font-bold text-sm tracking-tight">Dialaa Strategic Consultant</p>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                  <p className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Expert Active</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-slate-50/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm ${
                  m.role === 'user' 
                    ? 'bg-teal-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-sm'
                }`}>
                  <div className="whitespace-pre-wrap leading-relaxed font-medium">
                    {/* Basic text formatting simulation for professional look */}
                    {m.text.split('\n').map((line, lineIdx) => (
                      <div key={lineIdx} className={line.startsWith('###') ? 'text-teal-700 font-bold mt-2 mb-1 text-base' : 'mb-1'}>
                        {line.replace('###', '').replace(/\*\*(.*?)\*\*/g, '$1')}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-100">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about DHA, MOH or Facility setup..."
                className="w-full bg-slate-50 border border-slate-200 pl-4 pr-14 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all font-medium"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 bg-teal-600 text-white px-3 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 disabled:opacity-40 disabled:shadow-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
            <div className="flex justify-between items-center mt-4">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Dialaa Official Assistant</p>
              <a href="tel:0557198392" className="text-[10px] text-teal-600 font-bold hover:underline">Direct Helpline</a>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-teal-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-white animate-pulse"></div>
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;