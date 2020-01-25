import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  SET_LOADING,
} from "../actions/actionsType";

const initialState = {
  contacts: [],
  contact: {},
  id: "",
  loading: false,
  error: null,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      const contacts = Object.keys(action.payload).map(key => ({
        ...action.payload[key],
        id: key
      }));
      return { ...state, contacts };
    case FETCH_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}
