const shipsReducerDefault = [];
export default (state = shipsReducerDefault, action) => {
  switch(action.type) {
    case "SHIPS_FETCH_DATA_SUCCESS":
      return action.ships;
    default:
      return state;
  }
}