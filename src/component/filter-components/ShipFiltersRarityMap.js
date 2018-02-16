import React from "react";
import { connect } from "react-redux";
import { setRarityFilter } from "../redux/actions/filters";

const ShipFiltersRarityMap = (props) => {
  const rarityAll = ["N", "R", "SR", "SSR"];
  return (
    <div>
      {
        rarityAll.map(rarity => (
          <div key={rarity}>
            <button onClick={() => props.dispatch(setRarityFilter(rarity))}>
              {rarity}
            </button>
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ShipFiltersRarityMap)