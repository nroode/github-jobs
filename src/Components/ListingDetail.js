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
  @media (min-width: 768px) {
  }
`;

const Icon = styled.span`
  color: #b9bdcf;
  font-size: 20px;
`;

const Arrow = styled.span`
  color: #1e86ff;
  font-size: 20px;
  transform: rotate(180deg);
`;

const BackBtn = styled.button`
  border: none;
  color: #1e86ff;
  font-weight: 500;

  @media (min-width: 768px) {
  }
`;

const PanelLg = styled.div`
  @media (min-width: 768px) {
  }
`;

function ListingDetail(props) {
  return (
    <Container>
      <PanelSm>
        <BackBtn>
          <Arrow className="material-icons">arrow_right_alt</Arrow>Back to Search
        </BackBtn>
        <h4>How to Apply</h4>
        <div dangerouslySetInnerHTML={{__html: props.jobDetailSelection.how_to_apply}} />
      </PanelSm>
      <PanelLg>
        {props.jobDetailSelection.company}
        <h2>{props.jobDetailSelection.title}</h2>
        <div dangerouslySetInnerHTML={{__html: props.jobDetailSelection.description}} />
      </PanelLg>
    </Container>
  );
}

export default ListingDetail;
