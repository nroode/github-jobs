import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 12px;
  margin: 16px 0px;
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 90px 1fr 1fr;
    grid-column-gap: 16px;
  }
`;

const ListingLogo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 4px;
`;

const NotFound = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #bdbdbd;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 500;
`;

const PositionTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  line-height: 21px;
  color: #334680;
  margin: 8px 0px 12px;
`;

const PositionCompany = styled.h4`
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  color: #334680;
`;

const PositionType = styled.div`
  border: 1px solid #334680;
  border-radius: 4px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  display: inline-block;
  padding: 6px;
  color: #334680;
`;

const Icon = styled.span`
  color: #b9bdcf;
  padding: 0px 10px;
  font-size: 20px;
`;

function Listing(props) {

     let calcDaysPosted = (postDate) => {
        let datePosted = new Date(postDate);
        let today = new Date();

        let difference = Math.floor((today - datePosted) / (1000*60*60*24));
        console.log(today, datePosted);
        console.log(difference);

        return `${difference} day${ difference === 1 ? '' : 's'} ago`;
    }

  return (
    <div>
      <Container>
        <ListingLogo>
          {props.jobData.company_logo ? (
            <img
              src={props.jobData.company_logo}
              alt={props.jobData.company}
              className="companyLogo"
            ></img>
          ) : (
            <NotFound>:-( no image</NotFound>
          )}
        </ListingLogo>
        <div className="listing-info__main">
          <PositionCompany>{props.jobData.company}</PositionCompany>
          <PositionTitle>{props.jobData.title}</PositionTitle>
          <PositionType>{props.jobData.type}</PositionType>
        </div>
        <div>
          <Icon className="material-icons">public</Icon> {props.jobData.location}
          <Icon className="material-icons">access_time</Icon> { calcDaysPosted(props.jobData.created_at) }
        </div>
      </Container>
    </div>
  );
}

export default Listing;
