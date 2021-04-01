import axios from "axios";
import {GET_PROCESS_TYPE, GET_PROCESS_TYPES, DELETE_PROCESS_TYPE, GET_ERRORS} from "./types";

export const createProcessType = (processType, history) => async dispatch => {
    try{
    await axios.post("/api/processType/create", processType);
    history.push("/processTypeList");
    dispatch({
        type: GET_ERRORS,
        payload: {}
    });
    }catch(exception)  {
    }   
};

export const updateProcessType = (processType, history) => async dispatch => {
    try{
        await axios.post("/api/processType/update", processType);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }catch(exception) {
        history.push("/dashboard");
    }
};

export const getProcessType = (id) => async dispatch => {
    try{
        const res = await axios.get(`/api/processType//find/${id}`, id);
        dispatch({
            type: GET_PROCESS_TYPE,
            payload: res.data
        });
    }catch(exception)  {
    }
};

export const getProcessTypes = () => async dispatch => {
    try{
        const res = await axios.get("/api/processType/findAll");
        dispatch({
            type: GET_PROCESS_TYPES,
            payload: res.data
        });
    }catch(exception){
    }
}

export const deleteProcessType = (id, history) => async dispatch => {
    if (
        window.confirm(
          "Are you sure? This will delete the process type and all the data related to it"
        )
      ) {
    try{
        await axios.delete(`/api/processType/delete/${id}`,  id);
        dispatch({
            type: DELETE_PROCESS_TYPE,
            payload: id
        });
    }catch(exception)  {
    }
    }
};