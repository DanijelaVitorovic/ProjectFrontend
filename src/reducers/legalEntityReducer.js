import {GET_LEGAL_ENTITY, GET_LEGAL_ENTITIES, DELETE_LEGAL_ENTITY} from "../actions/types";

const initialState =  {
    legalEntities: [],
    legalEntity:  {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LEGAL_ENTITY:
            return {
                ...state,
                legalEntity: action.payload
            };
        case GET_LEGAL_ENTITIES:
            console.log(action)
            return{
                ...state,
                legalEntities: action.payload
            };
        case DELETE_LEGAL_ENTITY:
            return{
                ...state,
                legalEntity: state.legalEntities.filter(
                    legalEntity =>  legalEntity.id != action.payload
                )
            };
        default:
            return state;
    }
}