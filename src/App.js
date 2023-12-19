import React from 'react';
import Hoc from './Hoc';

const buttonStyle = {
  padding: '10px',
  margin: '5px',
  backgroundColor: '#4CAF50', 
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

const App = ({ name, onLogout }) => {
  return (
    <div>
      <h1>Welcome Mr. {name}</h1>
      <button onClick={onLogout} style={buttonStyle}>
        Logout
      </button>
    </div>
  );
};



export default Hoc(App);
