import React, { useState } from "react";

const Hoc = (WrappedComponent) => {
  const WithAuth = (props) => {
    const [auth, setAuth] = useState(false);

    return (
      <div>
        {auth ? (
          <WrappedComponent name={"Shiva Shankar Goddumarri"} />
        ) : (
          <h1>Please Login....</h1>
        )}
      </div>
    );
  };

  return WithAuth;
};

export default Hoc;
