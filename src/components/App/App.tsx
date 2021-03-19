import * as React from 'react';
import { useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import SuperMind from '../SuperMind/SuperMind';

function App() {
  const [stat,setStat] = useState('main')
  const [comp, setComp] = useState(<Main />)


  return (
    <>
      <button onClick={() => {
        if (stat === 'main') {
          console.log('lel');
          setStat('supermind')
          setComp(<SuperMind />)
        } else {
          setStat('main')
          setComp(<Main />)
        }
      }}>lol</button>
      {comp && comp}
    </>
  )
}
export default App
