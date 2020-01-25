import { FETCH_ERROR, FETCH_SUCCESS, SET_LOADING } from "./actionsType";
import axiosContact from "../../axiosContact";

const setLoading = () => ({ type: SET_LOADING });

export const getContacts = () => {
  return async dispatch => {
    dispatch(setLoading());
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
