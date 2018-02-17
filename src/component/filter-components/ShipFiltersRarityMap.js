import React from "react";
import { connect } from "react-redux";
import { setRarityFilter } from "../redux/actions/filters";

const ShipFiltersRarityMap = (props) => {
  const rarityAll = ["N", "R", "SR", "SSR"];
  return (
    <div className="filters__container">
      {
        rarityAll.map(rarity => (
          <div key={rarity} className="filters__item">
            <button onClick={() => props.dispatch(setRarityFilter(rarity))}
            className={props.filters.rarity === rarity ? `filters__btn filters__btn--active filters__btn--${rarity}` : `filters__btn filters__btn--${rarity}`}>
              {rarity}
              {props.filters.rarity === rarity && <span className="checkmark checkmark--rarity">✔</span> }
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