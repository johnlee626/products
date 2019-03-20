import { REQUEST, RECEIVE } from '../constants/ActionTypes';

const locationListing = (state = { isLocating: false, location: null, regions: null }, action) => {
  // TODO using the above state shape, implement this reducer. Don't forget to test it!

  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isLocating: true
      });
    case RECEIVE:
      return Object.assign({}, state, {
        isLocating: false,
        location: action.json.location,
        regions: action.json.regions
      });
    default:
      return state;

  }
};

export default locationListing;
