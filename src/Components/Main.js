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
      listingDetailId: "",
    };
  }

  componentDidMount() {
    axios.get(`https://jobs.github.com/positions.json?`).then((res) => {
      const jobResultsData = res.data;
      this.setState({ jobResultsData });
    });
  }

  showListingDetail = (id) => {
    console.log(id);
    console.log("clicked");
    this.setState({
      isSearchView: false,
      listingDetailId: id,
    });
    console.log(this.state.listingDetailId);
  };

  showSearchView = () => {
    this.setState({
      isSearchView: true,
    });
  };

  calcDaysPosted = (postDate) => {
    let datePosted = new Date(postDate);
    let today = new Date();

    let difference = Math.floor((today - datePosted) / (1000 * 60 * 60 * 24));
    console.log(today, datePosted);
    console.log(difference);

    return `${difference} day${difference === 1 ? "" : "s"} ago`;
  };

  render() {
    let [ jobDetailSelection ] = this.state.jobResultsData.filter(
      (jobDetails) => jobDetails.id === this.state.listingDetailId
    );
    console.log(jobDetailSelection);
    return (
      <div>
        {this.state.isSearchView ? (
          <SearchView
            jobResults={this.state.jobResultsData}
            showListingDetail={this.showListingDetail}
            calcDaysPosted={this.calcDaysPosted}
          />
        ) : (
          <ListingDetail
            jobDetailSelection={jobDetailSelection}
            jobResults={this.state.jobResultsData}
            listingDetailId={this.state.listingDetailId}
            showSearchView={this.showSearchView}
            calcDaysPosted={this.calcDaysPosted}
          />
        )}
      </div>
    );
  }
}

export default Main;
