// import * as rootNavigation from '../../navigator/helpers/rootNavigation';
import * as types from '../../types/drivers';

import {apiHelper} from '../../../api';

const getStartDrivers = (driverId = null, page = 0) => async (dispatch) => {
  dispatch({type: types.LOADERSTART});
  try {
    const data = await apiHelper(
      'GET',
      `/drivers.json?limit=10&offset=${10 * page}`,
    );
    dispatch({
      type: types.GETSTARTDRIVERS,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({type: types.LOADERSTOP});
  }
};

export {getStartDrivers};
