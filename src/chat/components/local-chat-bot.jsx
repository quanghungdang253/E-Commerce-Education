import React, { useEffect, useRef, useState } from "react";
import imageChatbot from "../assets/image/imgChatbot.jpg";
  import iconUser from "../assets/image/iconUser.jpg";
import iconSendMessage from "../assets/image/sendMessage.png";
import content, {contentWelcome } from "../content/content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const ChatBotLocal = ({ setCloseBot }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);

  const messageEndRef = useRef(null);

console.log("data messeage "+ message);

  const handleMessage = () => {
    if (!input.trim()) {
              return;
    } 
    
    const messageUser = {
      nameClass: "user",
             icon: iconUser,
             content: input,
              textClass: "textUser"
    };
    setMessage((prev) => [...prev, messageUser]);
        setInput("");
  };


  useEffect(() => {
    if (message.length === 0) {
                 return;
    } 
           const nameMessage = message[message.length - 1];
           console.log(nameMessage);
    if (nameMessage.nameClass === "user") {
      const timeout = setTimeout(() => {
               const keyMatch = Object.keys(content).find((key) =>
                     nameMessage.content.toLowerCase().includes(key.toLowerCase())
        );
        const response = keyMatch
          ? content[keyMatch]

          : "Dạ em chưa hiểu yêu cầu của Anh/Chị. Anh/Chị vui lòng nói rõ hơn được không ạ?";

        const messageStore = {
                nameClass: "store",
                 icon: imageChatbot,
                 content: response,
                     textClass: "textStore"
        };

        setMessage((prev) => [...prev, messageStore]);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  useEffect(() => {
             messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    
<div className="fixed bottom-20 right-6 z-50 w-full max-w-md">
      <div className="
            bg-white shadow-xl 
              rounded-lg 
              overflow-hidden
              flex flex-col h-[500px]"
        >
     
        <div className="
            bg-blue-600
            text-white
              flex items-center
              justify-between 
                 px-4 py-3">
          <div className="flex items-center space-x-2">
              <img src={imageChatbot} alt="chatbot" className="w-10 h-10 rounded-full" />
                 <h1 className="text-lg font-semibold">Chatbot AI tư vấn</h1>
          </div>
          <FontAwesomeIcon
            icon={faWindowClose}
            className="text-white cursor-pointer hover:text-gray-300 text-xl"
            onClick={() => setCloseBot(false)}
          />

        </div>
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300">
    
          <div className="flex items-start space-x-2">
            <img src={imageChatbot} alt="chatbot" className="w-10 h-10 rounded-full" />
            <div className="bg-white p-3 rounded-lg shadow text-sm space-y-1">
              {contentWelcome.map((line, index) => (
                <p key={index}>{line}     </p>
              ))}
            </div>
          </div>
        
          {message.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-start space-x-2 ${
                item.nameClass === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {item.nameClass === "store" && (
                <img src={item.icon} alt="store" className="w-8 h-8 rounded-full" />
              )}
              <div
                className={`p-3 rounded-lg shadow text-sm max-w-[70%] ${
                  item.nameClass === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {item.content}
              </div>
              {item.nameClass === "user" && (
                <img src={item.icon} alt="user" className="w-8 h-8 rounded-full" />
              )}
            </div>
          ))}
                  <div ref={messageEndRef} />
        </div>

        <div className="flex items-center px-4 py-3 border-t">
          <input
            type="text"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Nhập vào thông tin"

            className="
                flex-1 border
               border-gray-300
                rounded-full px-4
                py-2 text-sm
               focus:outline-none
               focus:ring-2
               focus:ring-blue-400"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                   handleMessage();
              }
            }}
          />
          <button
            onClick={handleMessage}
            className="ml-2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
          >
            <img src={iconSendMessage} alt="send" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    )
   
};

export default ChatBotLocal;
