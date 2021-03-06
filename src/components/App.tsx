import * as React from 'react';
import { useState, useCallback, useEffect } from 'react'
import './App.css';

const App = () => {
  const wsClient = new WebSocket(window.location.origin.replace('http', 'ws'))
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const inputHandler = ({ target }: any) => {
    setInput(target.value)
  }

  useEffect(()=>{
  },[])
  wsClient.onopen = () => {
    console.log('open');
  }

  const wsPost = (input: string) => {
    wsClient.send(input)
    console.log('1');
  }

  wsClient.onmessage = (message: any) => {
    console.log(message.data);
    setMessages(pre => [...pre, message.data])
  }

  const sendMessHandler = () => {
    setInput('');
    wsPost(input)
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
