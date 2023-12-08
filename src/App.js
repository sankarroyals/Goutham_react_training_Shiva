import "./App.css";
import styled from "styled-components";

// Defining the styled component outside the functional component
const StyledHeading = styled.h2`
  background: yellow;
  color: black;
  font-size: 24px;
`;

function App() {
  
  // Internal CSS using Variable
  const internalCssVariableStyle = {
    background: "green",
    color: "white",
    marginTop: "50px",
  };

  return (
    <div>
      <h1>WAYS TO APPLY CSS</h1>

      {/* External CSS using Tags */}
      <h2>1.Applying External CSS using Tags</h2>
      <p>This is the first way to apply CSS</p>

      {/* External CSS using ClassName */}
      <h2 className="primary">2.Applying External CSS using ClassName</h2>
      <p>This is the second way to apply CSS</p>

      {/* External CSS using ID */}
      <h2 id="heading">3.Applying External CSS using ID</h2>
      <p>This is the third way to apply CSS</p>

      {/* Internal CSS using Variable */}
      <h2 style={internalCssVariableStyle}>
       4. Applying Internal CSS using Variable
      </h2>
      <p>This is the fourth way to apply CSS</p>

      {/* Inline Styles */}
      <h2 style={{ background:"red", color: "white", fontSize: "20px" }}>
       5.Applying Inline Styles
      </h2>
      <p>This is the fifth way to apply CSS</p>

      {/* CSS with Styled Components */}
      <StyledHeading>6.Applying CSS with Styled Components</StyledHeading>
      <p>This is the sixth way to apply CSS</p>

      {/* Applying Global Styles */}
      <h2 className="global-style">7.Applying Global Styles (It is in Public Folder and linked to index.html file)</h2>
      <p>This is the seventh way to apply CSS</p>
      
    </div>
  );
}

export default App;
