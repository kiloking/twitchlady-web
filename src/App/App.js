import tmi from 'react-tmi'


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
    <div className="App">
     123
    </div>
  );
}

export default App;
