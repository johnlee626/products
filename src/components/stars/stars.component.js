import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Star = styled.svg`
  position: relative;
  top: 5px;
  left: 10px;
  -webkit-transform: translateX(-40%);
  -ms-transform: translateX(-40%);
  transform: translateX(-40%);

  @media (max-width: 359px) {
    top: 10px;
  }
`;

const HalfStar = styled.svg`
  position: relative;
  top: 5px;
  left: 8px;
  padding-right: 5px;
  -webkit-transform: translateX(-40%);
  -ms-transform: translateX(-40%);
  transform: translateX(-40%);

  @media (max-width: 359px) {
    top: 10px;
  }
`;

function Stars(props) {
  const items = [];

  // create full star
  for (let i = 0; i < props.numOfStars; i += 1) {
    items.push(<Star key={i} width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
      <polygon points='10,1 4,18 19,6 1,6 16,18' fill='orange' />
    </Star>);
  }

  // create half star
  if (props.left >= 0.5) {
    items.push(<HalfStar key={props.numOfStars} width='10' height='20' xmlns='http://www.w3.org/2000/svg'>
      <polygon points='10,1 4,18 19,6 1,6 16,18' fill='orange' />
    </HalfStar>);
  }

  return items;
}

Stars.propTypes = {
  listing: PropTypes.object
};

export default Stars;
