import React from "react";
import Search from "./Search";
import Listing from "./Listing";
import Filters from "./Filters";
import styled from "styled-components";

const ListingContainer = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 31% 1fr;
    grid-column-gap: 30px;
  }
`;

function SearchView(props) {
  return (
    <div>
      <Search />

      <ListingContainer>
        <Filters />
        <div>
          {props.jobResults.map((job) => (
            <Listing 
            key={job.id} 
            jobData={job}
            showListingDetail={props.showListingDetail}
            calcDaysPosted={props.calcDaysPosted}
             />
          ))}
        </div>
      </ListingContainer>
    </div>
  );
}

export default SearchView;
