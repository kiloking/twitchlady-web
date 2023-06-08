import React,{useState,useEffect} from 'react'
import tmi from 'tmi.js';

function Index() {
  const [messages, setMessages] = useState([]);
  const [currentVolume, setCurrentVolume] = useState('0.5')
  const [currentPitch, setCurrentPitch] = useState('1')
  const [currentLang, setCurrentLang] = useState('zh-TW')
  const [currentRate, setCurrentRate] = useState('1')
  const client = new tmi.Client({
    channels: ['dada6621'] // 這裡填寫你要擷取的頻道名稱
  });
  const synth = window.speechSynthesis;


  useEffect(()=>{
    const populateVoices = () => {
      const voices = synth.getVoices();
      const lanlist = voices.map((lan) => {
        return `<option value="${lan.name}">${lan.name} (${lan.lang})</option>`;
      });
      // voicesDropdown.innerHTML = lanlist.join('');
    };

    speechSynthesis.addEventListener('voiceschanged', populateVoices);

    client.on('message', (channel, tags, message, self) => {
      console.log(tags)
      console.log(`${tags['display-name']}: ${message}`);
      let displayName = tags['display-name']
      if(displayName  === 'Nightbot' || displayName  === 'StreamElements') return
      const msgItems = {
        name:tags['display-name'],
        color:tags['color'],
        message:message
      }
      setMessages((prevMessages) => [...prevMessages, msgItems]);
      createSpeak(message);
    });

    client.connect();

    return () => {
      // 在组件卸载时断开连接
      client.disconnect();
    };
  },[])
  const createSpeak = (text) => {
    const u = new SpeechSynthesisUtterance();
    u.text = text;
    u.volume = currentVolume; // 设置音量为 0.7（范围为 0 到 1）
    u.pitch = currentPitch; // 设置语调为 1.2（范围为 0 到 2）
    u.rate = currentRate;
    u.lang = currentLang ; // 设置要使用的语言，例如'en-US'
    synth.speak(u);
  };
  return (
    <div>
      <ul className=' space-y-2 m-3'>
        {messages.map((item, index) => (
          <li key={index} className="text-xl  ">
            <span 
              className="font-bold"
              style={{color:item.color}}
            >{item.name}</span> 
            <span className=' font-bold'>:{item.message}</span>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Index
