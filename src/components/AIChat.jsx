import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';
import { aiChatContext } from '../data/portfolio';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: "Hey! I'm Abhay's portfolio AI. Ask me anything about his projects, tech stack, or how he built SecureWealth AI's sub-30ms fraud detection system. 🚀",
};

const SUGGESTED_QUESTIONS = [
  "How does SecureWealth AI work?",
  "What's Abhay's strongest skill?",
  "Tell me about SafeSphere",
  "Is Abhay available to hire?",
];

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    setInput('');
    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          system: aiChatContext,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'API request failed');
      }
      
      const reply = data.content?.[0]?.text || "Sorry, I couldn't fetch a response right now.";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('API Error:', err);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Reach out directly at abhaysahucse@gmail.com!"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button — pill with label */}
      <motion.button
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl transition-all duration-300 group ${isOpen ? 'opacity-0 pointer-events-none scale-90' : ''}`}
        style={{
          background: 'linear-gradient(135deg, #1e40af, #0e7490)',
          boxShadow: '0 8px 30px rgba(59,130,246,0.35), 0 0 0 1px rgba(34,211,238,0.2)',
          border: '1px solid rgba(34,211,238,0.25)',
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 12px 40px rgba(59,130,246,0.5), 0 0 0 1px rgba(34,211,238,0.4)',
        }}
        whileTap={{ scale: 0.97 }}
        aria-label="Open AI Chat"
      >
        {/* Pulsing dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>

        {/* Icon */}
        <Sparkles size={16} className="text-cyan-200 group-hover:text-white transition-colors" />

        {/* Label */}
        <span className="font-display font-semibold text-sm text-white leading-none">
          Ask About Me
        </span>

        {/* Arrow */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-cyan-300 group-hover:translate-x-0.5 transition-transform">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl overflow-hidden"
            style={{
              height: 520,
              background: 'rgba(2,6,23,0.97)',
              border: '1px solid rgba(59,130,246,0.2)',
              boxShadow: '0 0 60px rgba(59,130,246,0.1), 0 30px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/50"
              style={{ background: 'rgba(59,130,246,0.08)' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #22d3ee)' }}>
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm" style={{ color: '#e2e8f0' }}>
                    Ask about Abhay
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-xs" style={{ color: '#64748b' }}>AI-powered · always online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-all">
                <X size={14} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    msg.role === 'user'
                      ? 'bg-blue-500/20 border border-blue-500/30'
                      : 'border border-cyan-400/30'
                  }`}
                    style={msg.role === 'assistant' ? { background: 'rgba(34,211,238,0.1)' } : {}}>
                    {msg.role === 'user'
                      ? <User size={12} style={{ color: '#3b82f6' }} />
                      : <Bot size={12} style={{ color: '#22d3ee' }} />
                    }
                  </div>
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                      msg.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'
                    }`}
                    style={msg.role === 'user'
                      ? { background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.2)', color: '#e2e8f0' }
                      : { background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.1)', color: '#94a3b8' }
                    }
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)' }}>
                    <Bot size={12} style={{ color: '#22d3ee' }} />
                  </div>
                  <div className="px-3 py-3 rounded-xl rounded-tl-sm"
                    style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.1)' }}>
                    <div className="flex gap-1 items-center">
                      {[0, 1, 2].map(i => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-400 typing-dot" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions (only on first message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-2.5 py-1.5 rounded-lg transition-colors"
                    style={{
                      background: 'rgba(59,130,246,0.08)',
                      border: '1px solid rgba(59,130,246,0.15)',
                      color: '#93c5fd'
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 pb-4 pt-2 border-t border-slate-800/50">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 px-3 py-2.5 rounded-xl text-xs font-mono outline-none transition-all"
                  style={{
                    background: 'rgba(148,163,184,0.06)',
                    border: '1px solid rgba(148,163,184,0.1)',
                    color: '#e2e8f0',
                  }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-40"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #22d3ee)',
                  }}
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}