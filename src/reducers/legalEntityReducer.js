import {
  GET_LEGAL_ENTITY,
  GET_LEGAL_ENTITIES,
  DELETE_LEGAL_ENTITY,
  ADD_LEGAL_ENTITY,
  UPDATE_LEGAL_ENTITY,
} from "../actions/types";

const initialState = {
  legalEntityList: [],
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
        legalEntityList: action.payload,
      };
    case DELETE_LEGAL_ENTITY:
      return {
        ...state,
        legalEntityList: state.legalEntityList.filter(
          (legalEntity) => legalEntity.id != action.payload
        ),
      };
    case ADD_LEGAL_ENTITY:
      return {
        ...state,
        legalEntityList: state.legalEntityList.concat(action.payload),
      };
    case UPDATE_LEGAL_ENTITY:
      return {
        ...state,
        legalEntityList: state.legalEntityList
          .filter((legalEntity) => legalEntity.id != action.payload.id)
          .concat(action.payload),
      };
    default:
      return state;
  }
}
