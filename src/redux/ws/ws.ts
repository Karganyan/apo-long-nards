// let wsClient: any;

import { isWsOpen } from "../../helpers";


// const inputHandler = ({ target }: any) => {
//   setInput(target.value)
// }

const wsSend = (input?: string, ws?: any) => {
  if (isWsOpen(ws)) {
    ws.send(JSON.stringify({ message: input }));
    // setMessages(pre => [...pre, input])
    return console.log('send to serv');
  }
  return console.log('Something went wrong');
}

// const sendMessHandler = () => {
//   wsSend(input, wsClient)
// }

export const connect = () => {
  const wsClient: any = new WebSocket(
    window.location.origin.replace('http', 'ws')
    // 'ws://localhost:3000'
  )

  wsClient.onopen = (): void => {
    console.log('open ws connection on client');
  }

  wsClient.onmessage = ({ data }: any): void => {
    console.log(data);
    const { message } = JSON.parse(data);
    console.log(message);
    // setMessages(pre => [...pre, message])
  }

  wsClient.onclose = function (e: any): void {
    if (e.code !== 1000) {
      console.log('try to reconnect');
      setTimeout(function () {
        console.log('try to reconnect in setTimeout');
        connect();
      }, 1000);
    } else {
      console.log('ws bye');
    }
  };

  wsClient.onerror = (e: any): void => {
    if (e.code === 'ECONNREFUSED') {
      console.log('ws reconnection after ECONNREFUSED error');
      setTimeout(function () {
        connect();
      }, 1000);
    } else {
      console.log('that is a unknown error bro, call to developer');
    }
  }
}


// document.addEventListener("DOMContentLoaded", connect);

