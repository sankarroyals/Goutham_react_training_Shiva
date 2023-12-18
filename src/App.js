import React from 'react';
import Hoc from './Hoc';

const App =({name}) => {
  return (
    <h1>Welcome Mr. {name}</h1>
  )
}

export default Hoc(App);