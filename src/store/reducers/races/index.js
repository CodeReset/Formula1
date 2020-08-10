import * as types from '../../types/races';

const initialState = {
  races: [],
  totalRaces: '',
};

const racesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALLDRIVERRACE:
      return {
        ...state,
        races: action.payload.RaceTable.Races,
        totalRaces: action.payload.total,
      };

    default:
      return state;
  }
};
export default racesReducer;
