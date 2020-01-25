const initialState = {};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "typeName":
      return { ...state };

    default:
      return state;
  }
}
