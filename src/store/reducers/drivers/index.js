import * as types from '../../../api/drivers/types';

const initialState = {
  drivers: [],
  totalDrivers: '',
  loader: false,
};

const driversReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADERSTART:
      return {
        ...state,
        loader: true,
      };
    case types.LOADERSTOP:
      return {
        ...state,
        loader: false,
      };
    case types.GETSTARTDRIVERS:
      return {
        ...state,
        drivers: action.payload.DriverTable.Drivers,
        totalDrivers: action.payload.total,
      };

    default:
      return state;
  }
};
export default driversReducer;
