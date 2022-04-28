import React from "react";
import './App.scss'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import PublicPageLayout from '../Components/PublicPageLayout';
import tmi from 'react-tmi'

//pages
import Home from '../Pages/Home';
import TyperWriter from '../Pages/TyperWriter';
function App() {
  const client = new tmi.Client({
    options: { debug: true, messagesLogLevel: "info" },
    connection: {
      reconnect: true,
      secure: true
    }
,
    channels: [ 'dada6621' ]
  });
  client.connect().catch(console.error);
  client.on('message', (channel, tags, message, self) => {
    if(self) return;
    const { username ,color}  = tags
    const displayname = tags['display-name']
    console.log(message)
    if(message.toLowerCase() === '!hello') {
      client.say(channel, `@${tags.username}, heya!`);
    }
  });
  return (
    <BrowserRouter>
      <Routes> 
          <Route path="/"  element={<PublicPageLayout/>} >
            <Route path="/" exact element={<Home/>}   /> 
            <Route path="typewriter"  element={<TyperWriter/>}   /> 
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
