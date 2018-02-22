const filtersReducerDefault = {
  text: "",
  nation: "",
  detail: "",
  rarity: "",
  rarityVisible: false,
  detailsVisible: false,
  nationVisible: false
}

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case "SET_NATION_FILTER":
      if (state.nation === action.nation) {
        return { ...state, nation: "" }
      }
      return { ...state, nation: action.nation }
    case "SET_DETAIL_FILTER":
      if (state.detail === action.detail) {
        return { ...state, detail: "" }
      }
      return { ...state, detail: action.detail }
    case "SET_RARITY_FILTER":
      if (state.rarity === action.rarity) {
        return { ...state, rarity: "" }
      }
      return { ...state, rarity: action.rarity }
    case "SET_RARITY_FILTER_VISIBILITY":
      return {
        ...state, rarityVisible: !state.rarityVisible
      }
    case "SET_DETAILS_FILTER_VISIBILITY":
      return {
        ...state, detailsVisible: !state.detailsVisible
      }
    case "SET_NATION_FILTER_VISIBILITY":
      return {
        ...state, nationVisible: !state.nationVisible
      }
    case "RESET_FILTERS":
      return {
        ...state,
        text: "",
        nation: "",
        detail: "",
        rarity: "",
        rarityVisible: "",
        detailsVisible: "",
        nationVisible: ""
      };
    default:
      return state;
  }
}

export default filtersReducer