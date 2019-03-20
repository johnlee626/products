import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListingCard from '../listing_card/listing_card.component';

const Wrapper = styled.div`
  margin: 10px 10px 0 10px;
`;

const ListingCards = ({ listings }) => (
  <React.Fragment>
    {listings.map(listing => (
      <Wrapper key={listing.id}>
        <ListingCard listing={listing} />
      </Wrapper>
    ))}
  </React.Fragment>);

ListingCards.propTypes = {
  listings: PropTypes.array
};

ListingCards.defaultProps = {
  listings: []
};

export default ListingCards;
