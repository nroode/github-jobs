import React from "react";
import SearchView from "./SearchView";
import ListingDetail from "./ListingDetail";
import axios from "axios";

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isSearchView: true,
          jobResultsData: [],
      };
    }


    componentDidMount() {

        axios.get(`https://jobs.github.com/positions.json?`)
          .then(res => {
            const jobResultsData = res.data;
            this.setState({ jobResultsData });
          });
      }
  
    render() {
        console.log(this.state.jobResultsData);
      return (
        <div>
          <SearchView
          jobResults={this.state.jobResultsData}
          />
          <ListingDetail />
        </div>
      );
    }
  }

  export default Main;