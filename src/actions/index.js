import axios from 'axios';
import * as types from '../constants/ActionTypes';
import * as config from '../constants/config';

/* TODO Given the state shape defined in the reducer,
 * implement this action
 */
export const requestLocation = coords => ({
  type: types.REQUEST,
  coords
});

/* TODO Given the state shape defined in the reducer,
 * implement this action
 */
export const receiveLocation = (coords, json) => ({
  type: types.RECEIVE,
  coords,
  json
});

/* TODO Given the state shape defined in the reducer,
 * implement this action. Hint, this Action will likely be async
 */
export const locate = coords => async (dispatch) => {
  const latlngParam = coords === '' ? '' : `&latlng=${coords.latitude}%2C${coords.longitude}`;
  const res = await axios.get(`https://${config.API_HOST}/wm/v2/location?include%5B%5D=regions.listings${latlngParam}`);

  dispatch(requestLocation(coords));
  dispatch(receiveLocation(coords, res.data.data));
};
