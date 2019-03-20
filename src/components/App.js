import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import styled from 'styled-components';
import { locate } from '../actions';
import logo from '../assets/logo.png';
import Button from './button/button.component';
import ListingCards from './listing_cards/listing_cards.component';
import LocationHeader from './location_header/location_header.component';

import './App.css';

const Header = styled.header`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;
`;

const HeaderLogo = styled.img`
  width: 110px;
  height: 25px;
`;

const Content = styled.main`
  idth: 90%;
  margin: 0 auto;
`;

const RegionsContentLabel = styled.div`
  height: 30px;
  width: 100%;
  text-align: left;
  line-height: 40px;
  margin-left: 10px;
`;

const regionTypes = ['delivery', 'dispensary', 'doctor'];
const regionLabels = {
  delivery: 'Deliveries',
  dispensary: 'Dispensaries',
  doctor: 'Doctors'
};

export class App extends Component {

  constructor() {
    super();
    this.state = {
      clientLocating: false
    };

    this.locateMeClick = this.locateMe.bind(this);
  }

  locateMe() {
    const { dispatch } = this.props;

    if (navigator.geolocation) {
      this.setState({ ...this.state, clientLocating: true });
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(locate(position.coords));
      });
    }
  }

  render() {
    const { isLocating, location, regions } = this.props;
    const { clientLocating } = this.state;

    const getLabel = (listings, label) => {
      if (get(listings, 'listings').length) {
        return (
          <RegionsContentLabel key={label}>
            <strong> {label} </strong>
          </RegionsContentLabel>
        );
      }
      return <div/>;
    };

    return (
      <div className="app">
        <Header>
          <HeaderLogo src={logo} alt="weedmaps logo" width="300" height="70" />
          <Button text={'Locate Me'} onClick={this.locateMeClick} />
        </Header>
        <Content>
          { (clientLocating || isLocating) && !location &&
            <p className="app__loading">Locating...</p>
          }
          { !isLocating && location &&
            <LocationHeader location={location}/>
          }
          { !isLocating && regions &&
            <div className="app__regions">
              { regionTypes.map(regionType => (
                <div key={regionType} className="app__regions__content">
                  {getLabel(regions[regionType], regionLabels[regionType])}
                  <ListingCards listings={get(regions[regionType], 'listings')}/>
                </div>
                  ))
              }
            </div>
          }
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => state.location;

App.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  dispatch: PropTypes.any
};

App.defaultProps = {
  isLocating: false,
  location: {},
  regions: {}
};

export default connect(mapStateToProps)(App);
