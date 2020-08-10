import * as types from '../../types/races';

import {apiHelper} from '../../../api';

const getDriverRaceInfo = (driverId, page = 0) => async (dispatch) => {
  console.log(driverId);
  dispatch({type: types.LOADERSTART});
  try {
    const data = await apiHelper(
      'GET',
      `/drivers/${driverId}/results.json?limit=10&offset=${10 * page}`,
    );
    dispatch({type: types.GETALLDRIVERRACE, payload: data});
  } catch (e) {
    console.log(e);
  } finally {
    dispatch({type: types.LOADERSTOP});
  }
};

export {getDriverRaceInfo};
