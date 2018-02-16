// Filter actions
export const setNationFilter = (nation) => (
  {
    type: "SET_NATION_FILTER",
    nation
  }
)

export const setDetailFilter = (detail) => (
  {
    type: "SET_DETAIL_FILTER",
    detail
  }
)

export const setRarityFilter = (rarity) => (
  {
    type: "SET_RARITY_FILTER",
    rarity
  }
)

// Visability actions
export const SetRarityFilterVisiblity = () => (
  {
    type: "SET_RARITY_FILTER_VISIBILITY"
  }
)

export const SetDetailsFilterVisiblity = () => (
  {
    type: "SET_DETAILS_FILTER_VISIBILITY"
  }
)

export const SetNationFilterVisiblity = () => (
  {
    type: "SET_NATION_FILTER_VISIBILITY"
  }
)

// Reset
export const resetFilters = () => (
  {
    type: "RESET_FILTERS"
  }
)

// Clear single filter
export const clearFilter = (filter, visibility) => (
  dispatch => {
    dispatch(filter(""))
    dispatch(visibility())
  }
)