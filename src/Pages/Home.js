import React,{useState,useEffect} from 'react'
import tmi from 'tmi.js';

function Home() {
  const [messages, setMessages] = useState([]);
  const client = new tmi.Client({
    channels: ['yawara30'] // 這裡填寫你要擷取的頻道名稱
  });
  const synth = window.speechSynthesis;
  const createSpeak = (text) => {
    
    const u = new SpeechSynthesisUtterance();
    u.text = text;
    let voices = synth.getVoices();
    synth.speak(u)
  };
  function populateVoices() {
    voices = synth.getVoices()
    let lanlist = voices.map((lan) => {
      return `<option value="${lan.name}">${lan.name} (${lan.lang})</option>`
    })
    voicesDropdown.innerHTML = lanlist.join('')
  }
  speechSynthesis.addEventListener('voiceschanged', populateVoices)

  useEffect(()=>{
    client.on('message', (channel, tags, message, self) => {
      console.log(`${tags['display-name']}: ${message}`);
      createSpeak(message)
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
