import React from "react";
import Search from "./Search";
import Listing from "./Listing";

function SearchView(props) {
  return (
    <div>
      <Search />

      {props.jobResults.map((job) => (
        <Listing 
        key={job.id}
        jobData={job}
        />
      ))}
    </div>
  );
}

export default SearchView;
