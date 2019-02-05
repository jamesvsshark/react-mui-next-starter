const sampleReducer = (
  state = {
    openDialogue: false
  },
  action
) => {
  switch (action.type) {
    case "TOGGLE_DIALOGUE":
      return { openDialogue: !state.openDialogue };
    default:
      return state;
  }
};

export default sampleReducer;
