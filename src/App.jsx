import { useState } from 'react';
import Message from './components/Message';
import Button from './components/Button'

function App() {
  const [messages, setMessages] = useState([
    { sender: 'atd', text: 'Blabla blabla blabla' },
    { sender: 'usr', text: 'Blabla blabla blabla' },
    { sender: 'atd', text: 'Blabla blabla blabla' },
    { sender: 'usr', text: 'Blabla blabla blabla' }
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { sender: 'usr', text: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <>
      <main className="chat">
        <h1>Atendimento Online</h1>

        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
      </main>
      
      <div className="btn-input">
        <input
          type="text"
          id="usr-input"
          placeholder="Digite sua mensagem..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleSendMessage}>ENVIAR</Button>
      </div>
    </>
  );
}

export default App;