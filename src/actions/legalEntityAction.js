import axios from "axios";
import  {GET_ERRORS, GET_LEGAL_ENTITY, GET_LEGAL_ENTITIES, DELETE_LEGAL_ENTITY} from "./types";

export const createLegalEntity =  (legalEntity, history) => async dispatch => {
    try{
        await axios.post("/api/legalEntity/create", legalEntity);
        history.push("/dashboard");
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

export const updateLegalEntity = (legalEntity, history) => async dispatch => {
    try{
        await axios.post("/api/legalEntity/update", legalEntity);
        history.push("/dashboard");
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
        const res = await axios.get("/api/legalEntity/findAll");
        console.log(res.data)
        dispatch({
            type: GET_LEGAL_ENTITIES,
            payload: res.data
        });
    
};

export const getLegalEntity = (id, history) => async dispatch => {
    try{
        const res = await axios.get(`/api/legalEntity/find/${id}`);
        dispatch({
            type: GET_LEGAL_ENTITY,
            payload: res.data
        });
    }catch(e){
        history.push("/dashboard");
    }
};

export const deleteLegalEntity = (id, history) => async dispatch => {
    if (
        window.confirm(
          "Are you sure? This will delete the project and all the data related to it"
        )
      ) {
    try{
        await axios.delete(`/api/legalEntity/delete/${id}`);
        dispatch({
            type: DELETE_LEGAL_ENTITY,
            payload: id
        });
    }catch(e){
        
    }
}
};