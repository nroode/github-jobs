import React from "react";
import background from "../backgroundImg.png";
import styled from "styled-components";

const Background = styled.div`
  background: url("${background}");
  min-height: 138px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  align-items: center;
  padding: 42px 18px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 42px 200px;
    }
`;

const Form = styled.form`
  width: 100%;
  margin: 0px auto;
  background-color: white;
  border: 4px solid white;
  border-radius: 4px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  background-color: white;
  font-size: 12px;
  line-height: 14px;
  padding: 16px 40px;
  width: calc(100% - 104px);
  box-sizing: border-box;
  border: none;

  @media (min-width: 768px) {
    width: calc(100% - 146px);
  }

`;

const SearchBtn = styled.button`
  border: none;
  color: white;
  background-color: #1e86ff;
  width: 104px;
  height: 48px;
  border-radius: 4px;
  font: 500 16px/19px 'Roboto', sans-serif;

  @media (min-width: 768px) {
    width: 146px;
  }
`;

function Search(props) {
  return (
    <div>
      <Background>
        <Form>
          <SearchInput></SearchInput>
          <SearchBtn>Search</SearchBtn>
        </Form>
      </Background>
    </div>
  );
}

export default Search;
