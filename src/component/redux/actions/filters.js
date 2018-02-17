// Filter actions
export const setNationFilter = (nation) => (
  {
    type: "SET_NATION_FILTER",
    nation
  }
)

export const setDetailsFilter = (detail) => (
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
export const setRarityFilterVisibility = () => (
  {
    type: "SET_RARITY_FILTER_VISIBILITY"
  }
)

export const setDetailsFilterVisiblity = () => (
  {
    type: "SET_DETAILS_FILTER_VISIBILITY"
  }
)

export const setNationFilterVisiblity = () => (
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