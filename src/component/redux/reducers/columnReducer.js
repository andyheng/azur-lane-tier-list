const columnReducer = (state = {isFrontVisible: true}, action) => {
  switch (action.type) {
    case "SET_VISIBLE_COLUMN":
      return {
        ...state, isFrontVisible: !state.isFrontVisible
      }
    default:
      return state;
  }
}

export default columnReducer;