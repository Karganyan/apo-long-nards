import * as React from 'react';
import { useLocation } from 'react-router';

function SuperMind() {

  const location = useLocation()
  console.log(location);

  return (
    <div >
      <h1>Hello! this is game with supermind!</h1>
    </div>
  )
}
export default SuperMind;
