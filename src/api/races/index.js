import axios from 'axios';

import * as types from './types';
import config from '../config';

const getDriverRaceInfo = (driverId, page = 0) => async (dispatch) => {
  console.log(driverId);
  dispatch({type: types.LOADERSTART});
  try {
    const {data} = await axios.get(
      config.api +
        `/drivers/${driverId}/results.json?limit=10&offset=${10 * page}`,
    );
    dispatch({type: types.GETALLDRIVERRACE, payload: data.MRData});
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({type: types.LOADERSTOP});
  }
};

export {getDriverRaceInfo};
