import React, { useState } from "react";
import "./Chatbot.css";
import { MdChat } from "react-icons/md"; // Use the MdChat icon

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { user: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setMessages([...messages, { user: "user", text: userInput }]);
      setUserInput("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: "bot", text: "How can I assist you further?" },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {/* Chatbot Icon Button */}
      {!isChatOpen && (
        <div className="chatbot-icon" onClick={toggleChat}>
          <MdChat size={40} color="#ff9900" />
        </div>
      )}

      {/* Chatbot Window */}
      <div className={`chatbot-container ${isChatOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <button className="chatbot-toggle" onClick={toggleChat}>
            Close Chat
          </button>
        </div>
        {isChatOpen && (
          <div className="chatbot-content">
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chatbot-message ${
                    msg.user === "user" ? "user" : "bot"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={userInput}
                onChange={handleInputChange}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
