import React, { useState } from 'react';

const buttonStyle = {
  padding: '10px',
  margin: '5px',
  backgroundColor: '#008CBA', 
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};


const Hoc = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [auth, setAuth] = useState(false);

    const handleLogin = () => {
      setAuth(true);
    };

    const handleLogout = () => {
      setAuth(false);
    };

    return (
      <div>
        {auth ? (
          <WrappedComponent name={'Shiva Shankar Goddumarri'} onLogout={handleLogout} />
        ) : (
          <div>
            <h1>Please Login....</h1>
            <button onClick={handleLogin} style={buttonStyle}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  };
  return WithAuth;
};

export default Hoc;
