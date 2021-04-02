import {
  GET_PHYSICAL_ENTITY,
  GET_PHYSICAL_ENTITIES,
  DELETE_PHYSICAL_ENTITY,
} from "../actions/types";

const initialState = {
  physicalEntity: {},
  physicalEntities: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHYSICAL_ENTITIES:
      return {
        ...state,
        physicalEntities: action.payload,
      };
    case GET_PHYSICAL_ENTITY:
      return {
        ...state,
        physicalEntity: action.payload,
      };
    case DELETE_PHYSICAL_ENTITY:
      return {
        ...state,
        physicalEntities: action.payload,
      };
    default:
      return state;
  }
}
