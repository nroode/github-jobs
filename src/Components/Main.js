import React from "react";
import SearchView from "./SearchView";
import ListingDetail from "./ListingDetail";

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          iSSearchView: true,
      };
    }
  
    render() {
      return (
        <div>
          <SearchView />
          <ListingDetail />
        </div>
      );
    }
  }

  export default Main;