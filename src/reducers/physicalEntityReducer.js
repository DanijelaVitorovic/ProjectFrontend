import {
  GET_PHYSICAL_ENTITY,
  GET_PHYSICAL_ENTITIES,
  DELETE_PHYSICAL_ENTITY,
  UPDATE_PHYSICAL_ENTITY,
  ADD_PHYSICAL_ENTITY,
} from "../actions/types";

const initialState = {
  physicalEntity: {},
  physicalEntityList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHYSICAL_ENTITIES:
      return {
        ...state,
        physicalEntityList: action.payload,
      };
    case GET_PHYSICAL_ENTITY:
      return {
        ...state,
        physicalEntity: action.payload,
      };
    case DELETE_PHYSICAL_ENTITY:
      return {
        ...state,
        physicalEntityList: action.payload,
      };
    case ADD_PHYSICAL_ENTITY:
      return {
        ...state,
        physicalEntityList: state.physicalEntityList.concat(action.payload),
      };
    case UPDATE_PHYSICAL_ENTITY:
      return {
        ...state,
        physicalEntityList: state.physicalEntityList
          .filter((physicalEntity) => physicalEntity.id != action.payload.id)
          .concat(action.payload),
      };
    default:
      return state;
  }
}
