import { combineReducers } from "redux";

const intialState = {
  openDialogue: false
};

const sample = (state = intialState, action) => {
  switch (action.type) {
    case "TOGGLE_DIALOGUE":
      return { openDialogue: !state.openDialogue };
    default:
      return state;
  }
};

export default combineReducers({
  sample
});
