import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
    color: #334680;
    font: 500 14px/21px 'Poppins', sans-serif;

    .title {
        text-transform: uppercase;
        display: block;
        color: #B9BDCF;
        font-weight: 700;
        margin-bottom: 14px;

    }

  }
`;

const FiltersList = styled.ul`
  list-style-type: none;
  }
`;

const FiltersListItem = styled.li`
  margin: 16px 0px;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 12px;
  transform: scale(1.4);
  margin-left: 4px;

  }
`;

const LocationSearch = styled.input`
width: 100%;
padding: 17px;
box-sizing: border-box;
margin-bottom: 17px;
border: 0px;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
border-radius: 4px; 
`

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

      <LocationSearch></LocationSearch>

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
