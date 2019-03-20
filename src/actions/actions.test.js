import * as types from '../constants/ActionTypes';
import { requestLocation, receiveLocation } from './';

describe('Request location test', () => {
  it('should create an action to request location', () => {
    const coords = {};
    const expectedAction = {
      type: types.REQUEST,
      coords
    };
    expect(requestLocation(coords)).toEqual(expectedAction);
  });
});

describe('Receive location test', () => {
  it('should create an action to retrieve location', () => {
    const coords = {};
    const json = {};
    const expectedAction = {
      type: types.RECEIVE,
      coords,
      json
    };
    expect(receiveLocation(coords, json)).toEqual(expectedAction);
  });
});
