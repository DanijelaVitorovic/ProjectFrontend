import {GET_PROCESS_TYPE, GET_PROCESS_TYPES, DELETE_PROCESS_TYPE} from "../actions/types";

const initialState = {
    processTypes: [],
    processType: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PROCESS_TYPE:
            return{
                ...state,
                processType: action.payload
            };
        case GET_PROCESS_TYPES:
            return{
                ...state,
                processTypes: action.payload
            };
        case DELETE_PROCESS_TYPE:
            return{
                ...state,
                processTypes: state.processTypes.filter(
                    processType => processType.id != action.payload
                )
            };
        default:
            return state;
    }
};