import React,{useState} from 'react'
import { Chat } from "react-tmi";
function Home() {
  const [messages, setMessages] = useState([]);
  const channel = "dada6621";
  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <Chat
        channel={channel}
        onMessage={(channel, userstate, message, self) => {
          // 在這裡處理收到的聊天室訊息
          setMessages((prevMessages) => [...prevMessages, message]);
        }}
      />
    </div>
  )
}

export default Home
