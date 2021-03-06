import * as React from 'react';
import { useState, useCallback, useEffect } from 'react'
import './App.css';

const wsClient = new WebSocket(
  window.location.origin.replace('http', 'ws')
  // 'ws://localhost:3000'
)

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const inputHandler = ({ target }: any) => {
    setInput(target.value)
  }

  console.log(window.location.origin);

  wsClient.onopen = () => {
    console.log('open ws connection on client');
  }

  const wsPost = (input: string) => {
    wsClient.send(input)
    console.log('send to serv');
  }

  wsClient.onmessage = (message: any) => {
    console.log('message from serv', message);
    console.log('message.data from serv', message.data);
    setMessages(pre => [...pre, message.data])
  }

  const sendMessHandler = () => {
    setInput('');
    wsPost(JSON.stringify({ message: input }))
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
        ))}
      </div>
    </>
  )
}

export default App
