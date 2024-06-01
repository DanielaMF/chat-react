import Message from './components/Message';

function App() {
  return (
    <>
      <main className="chat" id="chat-conteudo">
        <h1>Atendimento Online</h1>

        <Message sender="atd" />
        <Message sender="usr" />
        <Message sender="atd" />
        <Message sender="usr" />
      </main>
    </>
  );
}

export default App;