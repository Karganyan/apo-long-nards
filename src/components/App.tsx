import * as React from 'react';
import { useState, useCallback, useEffect } from 'react'
import { isWsOpen } from '../helpers';
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

  //--------------------------------------//
  var hidden: any, visibilityChange: any;
  if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
  }

  function handleVisibilityChange() {
    if (!document.hidden) {
      wsClient.onopen = () => {
        console.log('ws reconnection after nonClient close');
      }
    }
  }
  // Warn if the browser doesn't support addEventListener or the Page Visibility API
  if (typeof document.addEventListener !== "undefined" || hidden) {
    document.addEventListener(visibilityChange, handleVisibilityChange);
  } else {
    console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
  }
  //--------------------------------------//

  wsClient.onopen = () => {
    console.log('open ws connection on client');
  }

  const wsSend = (input?: string, ws?: any) => {

    if (isWsOpen(ws)) {
      ws.send(JSON.stringify({ message: input }));
      setMessages(pre => [...pre, input])
      return console.log('send to serv');
    }
    return console.log('Something went wrong');
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

  wsClient.onclose = (e: any) => {

    if (e.code !== 1000) {
      console.log('try to reconnect');
      wsClient.onopen = () => {
        console.log('ws reconnection after nonClient close');
      }
    } else {
      console.log('ws bye');
    }
  }

  wsClient.onerror = (e: any) => {

    if (e.code === 'ECONNREFUSED') {
      console.log('ws wtf error, try recconect');
      wsClient.onopen = () => {
        console.log('ws reconnection after ECONNREFUSED error');
      }
    } else {
      console.log('that is a unknown error bro, call to developer');
    }
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
