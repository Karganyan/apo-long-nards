import * as React from 'react';
import { useState, useCallback, useEffect } from 'react'
import { isWsOpen } from '../helpers';
import './App.css';

const wsClient = new WebSocket(
  window.location.origin.replace('http', 'ws')
  // 'ws://localhost:3000'
)

const App = () => {
  // const [connect, setConnect] = useState(false)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const inputHandler = ({ target }: any) => {
    setInput(target.value)
  }

  console.log(window.location.origin);

  wsClient.onopen = () => {
    console.log('open ws connection on client');
  }

  const wsSend = (input: string, ws: any) => {
    if (isWsOpen(ws)) {
      ws.send(JSON.stringify({ message: input }));
      setMessages(pre => [...pre, input])
      console.log('send to serv');
    } else {
      return console.log('Something went wrong');

    }
  }

  wsClient.onmessage = ({ data }: any) => {
    console.log(data);
    const { message } = JSON.parse(data);
    console.log(message);
    setMessages(pre => [...pre, message])
  }

  const sendMessHandler = () => {
    setInput('');
    wsSend(input, wsClient)
  }

  wsClient.onclose = () => {
    console.log('ws bye');
  }

  return (
    <>
      <div className="lol">
        <h2>Chat</h2>
        <input onChange={inputHandler} value={input} />
        <button onClick={sendMessHandler}>send</button>
      </div>
      <div className='messages'>
        {messages && messages.map(message => (
          <div key={message + Math.random()}>
            {message}
          </div>
          // {sending && }
        ))}
      </div>
    </>
  )
}

export default App
