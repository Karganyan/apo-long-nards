import * as React from 'react';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import SuperMind from '../SuperMind/SuperMind';

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/supermind' component={SuperMind}/>
      </Switch>
    </>
  )
}
export default App
