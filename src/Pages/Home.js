import React,{useState,useEffect} from 'react'
import tmi from 'tmi.js';

function Home() {
  const [messages, setMessages] = useState([]);
  const client = new tmi.Client({
    channels: ['yawara30'] // 這裡填寫你要擷取的頻道名稱
  });

  useEffect(()=>{
    client.on('message', (channel, tags, message, self) => {
      console.log(`${tags['display-name']}: ${message}`);
    });
    
    client.connect();
  },[])
  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>

    </div>
  )
}

export default Home
