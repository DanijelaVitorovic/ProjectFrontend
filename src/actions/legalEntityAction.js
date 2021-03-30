import axios from "axios";
import  {GET_ERRORS, GET_LEGAL_ENTITY, GET_lEGAL_ENTITIES, DELETE_LEGAL_ENTITY} from "./types";

export const createLegalEntity =  (legalEntity, history) => async dispatch => {
    try{
        await axios.post("/api/legalEntity", legalEntity);
        history.push("/dashoard");
        dispatch({
            type: GET_ERRORS,
            payload:{}
        });
    }catch(e) {
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
};

export  const getLegalEntites = () => async dispatch => {
    try{
        const res = await axios.get("/api/legalEntity/findAll");
        dispatch({
            type: GET_lEGAL_ENTITIES,
            payload: res.data
        });
    }catch(e){
        
    }
};

export const getLegalEntity = (id) => async dispatch => {
    try{
        const res = await axios.get(`/api/legalEntity/${id}`);
        dispatch({
            type: GET_LEGAL_ENTITY,
            payload: res.data
        });
    }catch(e){

    }
};

export const deleteLegalEntity = (id, history) => async dispatc => {
    try{
        await axios.delete(`/api/legalEntity/${id}`);
        history.push("/dashoard");
        dispatch({
            tyre: DELETE_LEGAL_ENTITY,
            payload: id
        });
    }catch(e){
        
    }
};