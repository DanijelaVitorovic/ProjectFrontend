import {
  ADD_ORGANIZATIONAL_UNIT,
  UPDATE_ORGANIZATIONAL_UNIT,
  GET_ORGANIZATIONAL_UNIT,
  GET_ORGANIZATIONAL_UNITS,
  DELETE_ORGANIZATIONAL_UNIT,
} from '../actions/types';

const initialState = {
  organizationalUnitList: [],
  organizationalUnit: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ORGANIZATIONAL_UNIT:
      return {
        ...state,
        organizationalUnitList: state.organizationalUnitList.concat(
          action.payload
        ),
      };
    case UPDATE_ORGANIZATIONAL_UNIT:
      return {
        ...state,
        organizationalUnits: state.organizationalUnits.map(
          (organizationalUnit) =>
            organizationalUnit.id === action.payload.id
              ? action.payload
              : organizationalUnit
        ),
      };
    case GET_ORGANIZATIONAL_UNIT:
      return {
        ...state,
        organizationalUnit: action.payload,
      };
    case GET_ORGANIZATIONAL_UNITS:
      return {
        ...state,
        organizationalUnitList: action.payload,
      };
    case DELETE_ORGANIZATIONAL_UNIT:
      return {
        ...state,
        organizationalUnitList: state.organizationalUnitList.filter(
          (organizationalUnit) => organizationalUnit.id != action.payload
        ),
      };
    default:
      return state;
  }
}
