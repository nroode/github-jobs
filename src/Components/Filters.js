import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
    color: #334680;
    font: 500 14px/21px 'Poppins', sans-serif;
    margin-top: 29px;

    .title {
        text-transform: uppercase;
        display: block;
        color: #B9BDCF;
        font-weight: 700;
        margin-bottom: 14px;

    }

    @media (min-width: 768px) {
        margin-top: 42px;
    }



  }
`;

const FiltersList = styled.ul`
  list-style-type: none;
  }
`;

const FiltersListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 19px;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 12px;
  transform: scale(1.4);
  margin-left: 4px;

  }
`;


const Search = styled.div`
width: 100%;
padding: 17px 14px;
box-sizing: border-box;
margin-bottom: 17px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
border-radius: 4px; 
background-color: #ffffff;
display: grid;
grid-template-columns: 20px 1fr;
grid-column-gap: 14px;
box-sizing: border-box;


input {
    border: 0px;
    width: 100%;

    ::placeholder {
        color: #B9BDCF;
        font-size: 12px;
        line-height: 14px;
    }
}

`

const JobIcon = styled.span`
  color: #b9bdcf;
  justify-self: center;
  font-size: 20px;

`;

function Filters(props) {
  return (
    <FiltersContainer>
      <FiltersList>
        <FiltersListItem>
          <Checkbox />
          Full Time
        </FiltersListItem>
      </FiltersList>

      <h4 className="title">Location</h4>

      <Search><JobIcon className="material-icons">public</JobIcon><input placeholder="City, state, zip code, or country"></input></Search>

      <FiltersList>
        <FiltersListItem>
          <Checkbox />
          London
        </FiltersListItem>
        <FiltersListItem>
          <Checkbox />
          Amsterdam
        </FiltersListItem>
        <FiltersListItem>
          <Checkbox />
          New York
        </FiltersListItem>
        <FiltersListItem>
          <Checkbox />
          Berlin
        </FiltersListItem>
      </FiltersList>
    </FiltersContainer>
  );
}

export default Filters;
