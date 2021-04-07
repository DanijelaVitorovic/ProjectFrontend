import {
  GET_LEGAL_ENTITY,
  GET_LEGAL_ENTITIES,
  DELETE_LEGAL_ENTITY,
  ADD_LEGAL_ENTITY,
  UPDATE_LEGAL_ENTITY,
} from "../actions/types";

const initialState = {
  legalEntities: [],
  legalEntity: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEGAL_ENTITY:
      return {
        ...state,
        legalEntity: action.payload,
      };
    case GET_LEGAL_ENTITIES:
      return {
        ...state,
        legalEntities: action.payload,
      };
    case DELETE_LEGAL_ENTITY:
      return {
        ...state,
        legalEntities: state.legalEntities.filter(
          (legalEntity) => legalEntity.id != action.payload
        ),
      };
    case ADD_LEGAL_ENTITY:
      return {
        ...state,
        legalEntities: state.legalEntities.concat(action.payload),
      };
    case UPDATE_LEGAL_ENTITY:
      return {
        ...state,
        legalEntities: state.legalEntities
          .filter((legalEntity) => legalEntity.id != action.payload.id)
          .concat(action.payload),
      };
    default:
      return state;
  }
}
