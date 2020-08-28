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
    padding: 42px 50px;
  }

  @media (min-width: 1225px) {
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
  display: grid;
  align-items: center;
  grid-template-columns: 44px 1fr 104px;

  @media (min-width: 768px) {
    grid-template-columns: 44px 1fr 146px;
  }
}


`;

const SearchInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Title, companies, expertise or benefits",
}))`
  background-color: white;
  font-size: 12px;
  line-height: 14px;
  padding: 16px 0px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  ::placeholder {
    color: #b9bdcf;
    font-family: "Roboto", sans-serif;
  }

  @media (min-width: 768px) {
    width: 100%;
  }

`;

const SearchBtn = styled.button`
  border: none;
  color: white;
  background-color: #1e86ff;
  width: 104px;
  height: 48px;
  border-radius: 4px;
  font: 500 16px/19px "Roboto", sans-serif;

  @media (min-width: 768px) {
    width: 146px;
  }
`;

const JobIcon = styled.span`
  color: #b9bdcf;
  padding: 0px 10px;
`;

function Search(props) {
  return (
    <div>
      <Background>
        <Form>
          <JobIcon className="material-icons">work_outline</JobIcon>
          <SearchInput></SearchInput>
          <SearchBtn>Search</SearchBtn>
        </Form>
      </Background>
    </div>
  );
}

export default Search;
