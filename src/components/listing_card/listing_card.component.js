import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './listing_card.css';
import Avatar from '../avatar/avatar.component';
import Stars from '../stars/stars.component';

const Wrapper = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: #D3D3D3;
  padding: 10px;
  text-align: left;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const NameDiv = styled.div`
  color: rgb(74, 74, 74);
  font-size: 1.125rem;
  font-weight: 600;
  padding: 20px 0 0 5px;
`;

const InfoDiv = styled.div`
  color: rgb(74, 74, 74);
`;

const DistSpan = styled.span`
  white-space: nowrap;

  @media (max-width: 359px) {
    padding-left: 5px;
  }
`;

function ListingCard({ listing }) {
  const rating = listing.rating.toFixed(2);
  const distance = listing.distance.toFixed(2);
  const numOfStars = Math.floor(listing.rating);
  const left = rating - numOfStars;

  return (
    <Wrapper>
      <Avatar img={listing.avatar_image.small_url} />

      <WrapperInfo>
        <NameDiv>{listing.name}</NameDiv>
        <InfoDiv>
          <Stars numOfStars={numOfStars} left={left} /> | <DistSpan>{distance} miles</DistSpan>
        </InfoDiv>
      </WrapperInfo>
    </Wrapper>
  );
}

ListingCard.propTypes = {
  listing: PropTypes.object
};

export default ListingCard;
