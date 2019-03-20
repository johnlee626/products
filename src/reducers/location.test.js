import locationListing from './location';
import * as types from '../constants/ActionTypes';

describe('Receive reducer returns new state', () => {
  it('location reducer', () => {
    const state = { isLocating: false, location: null, regions: null };
    const action = {
      type: types.RECEIVE,
      json: {
        location: {},
        regions: {}
      }
    };
    const expectedAction = {
      isLocating: false,
      location: {},
      regions: {}
    };

    expect(locationListing(state, action)).toEqual(expectedAction);
  });
});