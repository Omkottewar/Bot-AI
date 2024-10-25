import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; 
import InitialChat from '../../Components/DefaultChats/DefaultChats.jsx';
import ChatInput from '../../Components/ChatInput/ChatInput.jsx';
import ChatCard from '../../Components/ChatCard/ChatCard.jsx';
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm.jsx';
import data from '../../SampleData.js';
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {
  const { toggleMenu } = useOutletContext(); 
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chat, setChat] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [chatId, setChatId] = useState(1);


  const generateResponse = (input) => {
    const response = data.find(item => input.toLowerCase() === item.question.toLowerCase());
    let answer = "Sorry, did not understand your query!";

    if (response) {
      answer = response.response;
    }

    setChat(prev => [
      ...prev,
      {
        type: 'Human',
        text: input,
        time: new Date(),
        id: chatId,
      },
      {
        type: 'AI',
        text: answer,
        time: new Date(),
        id: chatId + 1,
      },
    ]);

    setChatId(prev => prev + 2);
  };

  useEffect(() => {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar toggleMenu={toggleMenu} /> 

      {chat.length === 0 && <InitialChat generateResponse={generateResponse} />}

      {chat.length > 0 && (
        <div id="chatContainer" className="flex-grow overflow-y-auto p-4 space-y-2">
          {chat.map((item, index) => (
            <ChatCard
              details={item}
              key={index}
              updateChat={setChat}
              setSelectedChatId={setSelectedChatId}
              showFeedbackModal={() => setShowModal(true)}
            />
          ))}
        </div>
      )}

      <ChatInput generateResponse={generateResponse}  chat={chat} clearChat={() => setChat([])} />

      <FeedbackForm open={showModal} updateChat={setChat} chatId={selectedChatId} handleClose={() => setShowModal(false)} />
    </div>
  );
}
