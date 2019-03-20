import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  display: inline-block;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 100px;
  weight: 100px;
`;

const Avatar = ({ img }) => (
  <Div>
    <Img alt='listing img' src={img} />
  </Div>
);

Avatar.propTypes = {
  img: PropTypes.string
};

Avatar.defaultProps = {
  img: ''
};

export default Avatar;
