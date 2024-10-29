import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatBox = ({ token, roomId }) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:3000', {
      query: { token },
    });

    setSocket(newSocket);

    newSocket.emit('joinRoom', roomId);

    newSocket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => newSocket.disconnect();
  }, [roomId, token]);

  const sendMessage = () => {
    if (inputMessage.trim()) {
      socket.emit('message', { roomId, message: inputMessage });
      setInputMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'me' ? 'sent' : 'received'}`}>
            <p>{msg.message}</p>
            <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
