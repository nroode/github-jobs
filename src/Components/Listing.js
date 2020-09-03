import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 12px;
  margin: 16px 0px;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 90px 50% 1fr;
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
  height: 90px;
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
  font-size: 20px;
`;

const PostDetails = styled.div`
  color: #b9bdcf;
  font-size: 12px;
  line-height: 14px;
  align-self: center;
  justify-self: start;
  grid-column: 2 / 3;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 5px;
    align-items: center;
    grid-column: 3 / 4;
    align-self: end;
    justify-self: end;
  }
`;

const DetailItem = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 5px;
    align-items: center;
    float: left;
    padding: 0px 10px 0px 0px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    padding-right: 5px;
  }
`;

function Listing(props) {



  return (
    <div onClick={() => props.showListingDetail(props.jobData.id)}>
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
        <PostDetails>
          <DetailItem>
            <Icon className="material-icons">public</Icon>{" "}
            {props.jobData.location}
          </DetailItem>
          <DetailItem>
            <Icon className="material-icons">access_time</Icon>{" "}
            {props.calcDaysPosted(props.jobData.created_at)}
          </DetailItem>
        </PostDetails>
      </Container>
    </div>
  );
}

export default Listing;
