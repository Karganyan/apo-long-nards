import * as React from 'react';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import OnLine from '../OnLine/OnLine';
import SignUp from '../SignUp/SignUp';
import SuperMind from '../SuperMind/SuperMind';

function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/supermind' component={SuperMind}/>
        <Route exact path='/online' component={OnLine}/>
        <Route exact path='/signup' component={SignUp}/>
      </Switch>
    </>
  )
}
export default App
