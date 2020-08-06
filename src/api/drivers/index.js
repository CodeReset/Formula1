import axios from 'axios';

// import * as rootNavigation from '../../navigator/helpers/rootNavigation';

import * as types from './types';
import config from '../config';

const getStartDrivers = (driverId = null, page = 0) => async (dispatch) => {
  dispatch({type: types.LOADERSTART});
  try {
    const {data} = await axios.get(
      config.api + `/drivers.json?limit=10&offset=${10 * page}`,
    );
    dispatch({
      type: types.GETSTARTDRIVERS,
      payload: data.MRData,
    });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({type: types.LOADERSTOP});
  }
};

export {getStartDrivers};
