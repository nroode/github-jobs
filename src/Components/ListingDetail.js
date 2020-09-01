import React from "react";
import styled from "styled-components";


const Container = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 230px 1fr;
    grid-column-gap: 77px;
  }
`;

const PanelSm = styled.div`
  color: #334680;
  font-size: 14px;
  line-height: 21px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 36px;

  h4 {
    text-transform: uppercase;
    color: #b9bdcf;
    margin-bottom: 16px;
  }

  div p {
    overflow: hidden;
  }

  p a {
    color: #1e86ff;
    font-weight: 500;

    max-width: 200px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) {
  }
`;


const Arrow = styled.span`
  color: #1e86ff;
  font-size: 20px;
  transform: rotate(180deg);
  margin-right: 15px;
`;

const BackBtn = styled.button`
  border: none;
  color: #1e86ff;
  font-weight: 500;
  background-color: transparent;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
  }
`;

const PanelLg = styled.div`

  h2 {
      font-size: 24px;
      line-height: 28px;
      color: #334680;
      display: inline-block;
  }

  @media (min-width: 768px) {
    .title-wrapper {
        display: flex;
        align-items: center;
    }
  }
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
  margin: 4px 0px 10px;

  @media (min-width: 768px) {
    margin: 0px;
    margin-left: 17px;
  }
`;

const CompanyDetails = styled.div`
  display: grid;
  grid-template-columns: 42px 1fr;
  grid-column-gap: 12px;
  margin: 32px 0px;
  grid-row-gap: 10px;
  color: #334680;
  font-weight: bold;
`;

const ListingLogo = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 4px;
  grid-row: 1 / 3;

`;

const NotFound = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #bdbdbd;
  width: 100%;
  height: 42px;
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 500;
`;

const JobDescription = styled.div`
  color: #334680;
  font-size: 16px;

  h2,
  h3 {
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 24px;
  }

  strong {
    margin-bottom: 12px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
  }
`;

const Location = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-column-gap: 5px;
    align-items: center;
    float: left;
    padding: 0px 10px 0px 0px;
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color: #B9BDCF;

    span {
        color: #b9bdcf;
        font-size: 20px;
    }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    padding-right: 5px;
  }
`;


function ListingDetail(props) {
  return (
    <Container>
      <PanelSm>
        <BackBtn onClick={props.showSearchView}>
          <Arrow className="material-icons">arrow_right_alt</Arrow>Back to
          Search
        </BackBtn>
        <h4>How to Apply</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: props.jobDetailSelection.how_to_apply,
          }}
        />
      </PanelSm>
      <PanelLg>
        <div className="title-wrapper"><h2>{props.jobDetailSelection.title}</h2><PositionType>{props.jobDetailSelection.type}</PositionType></div>
        <CompanyDetails>
        <ListingLogo>
          {props.jobDetailSelection.company_logo ? (
            <img
              src={props.jobDetailSelection.company_logo}
              alt={props.jobDetailSelection.company}
              className="companyLogo"
            ></img>
          ) : (
            <NotFound>:-(</NotFound>
          )}
        </ListingLogo>
        {props.jobDetailSelection.company}
        <Location>
            <span className="material-icons">public</span>{" "}
            {props.jobDetailSelection.location}
        </Location>
        </CompanyDetails>
        
        <JobDescription>
          <div
            dangerouslySetInnerHTML={{
              __html: props.jobDetailSelection.description,
            }}
          />
        </JobDescription>
      </PanelLg>
    </Container>
  );
}

export default ListingDetail;
