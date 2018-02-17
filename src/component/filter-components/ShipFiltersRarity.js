import React, { Fragment } from "react";
import ShipFiltersRarityMap from "./ShipFiltersRarityMap";
import { connect } from "react-redux";
import { setRarityFilter, setRarityFilterVisibility, clearFilter } from "../redux/actions/filters";
import { CSSTransitionGroup } from "react-transition-group";

const ShipFiltersRarity = (props) => {
  const showAndClearFilter = () => {
    props.filters.rarity === "" ?
      props.dispatch(setRarityFilterVisibility()) :
      props.dispatch(clearFilter(setRarityFilter, setRarityFilterVisibility));
  }
  return (
    <section>
      <button
        onClick={() => showAndClearFilter()}
        className={props.filters.rarityVisible ? "filter__handler-btn filter__handler-btn--active" : "filter__handler-btn"}
      >
        <span>Rarity</span>
        {props.filters.rarityVisible ? <span>✖</span> : <span>▼</span>}
      </button>

      <CSSTransitionGroup
        transitionName="transitionFilter"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        component={Fragment}
      >
        {props.filters.rarityVisible && <ShipFiltersRarityMap />}
      </CSSTransitionGroup>
    </section>
  )
}

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
)

export default connect(mapStateToProps)(ShipFiltersRarity)