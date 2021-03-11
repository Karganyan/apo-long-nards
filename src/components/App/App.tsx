import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import SuperMind from '../SuperMind/SuperMind';

function App() {
  return (
    <>
      <Switch>
        <Route path="/supermind" exact component={SuperMind} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  )
}
export default App
