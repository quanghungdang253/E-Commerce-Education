import React from 'react';
import imgChatbot from './assets/image/imgChatbot.jpg'; // thay đúng path hình ảnh bạn đang dùng
import { Link } from 'react-router-dom'; // nếu bạn dùng Link từ react-router
import { useState } from 'react';
import ChatBotLocal from './components/local-chat-bot';
function MainChatBot() {
const [closeBot , setCloseBot] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setCloseBot(true)}
        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 active:opacity-50"
      >
       
          <img
            src={imgChatbot}
            alt="Chatbot"
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="text-sm font-semibold whitespace-nowrap">Chat Trợ lý AI</h1>
        
      </button>
      {
        closeBot &&  <ChatBotLocal setCloseBot={setCloseBot}/>
        
      }
    
    </div>
  );
}

export default MainChatBot;
