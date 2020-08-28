import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./Components/Main";

const Title = styled.h1`
  color: #282538;
  text-align: left;
  margin: 0px 0px 32px;
  font: 500 24px/1.5 'Poppins', sans-serif;
`;

const TitleBold = styled.span`
  font-weight: 700;
`;

function App() {
  return (
    <div className="App">

      <div className="AppCenter">
        <Title><TitleBold>Github</TitleBold> Jobs</Title>
        <Main />
      </div>
    </div>
  );
}

export default App;
