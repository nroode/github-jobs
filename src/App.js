import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./Components/Main";

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.5;
  color: #282538;
  text-align: left;
  margin: 0px 0px 32px;
`;

function App() {
  return (
    <div className="App">

      <div className="AppCenter">
        <Title><span>Github</span> Jobs</Title>
        <Main />
      </div>
    </div>
  );
}

export default App;
