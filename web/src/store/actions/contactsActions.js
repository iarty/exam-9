import axiosContact from "../../axiosContact";

import { FETCH_ERROR, FETCH_SUCCESS, SET_LOADING } from "./actionsType";

export const postContacts = data => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      await axiosContact.post("/contacts.json", data);
      dispatch({ type: FETCH_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, error });
    }
  };
};

export const getContacts = () => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axiosContact.get("/contacts.json");
      if (response.data) {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETCH_ERROR, error });
    }
  };
};
