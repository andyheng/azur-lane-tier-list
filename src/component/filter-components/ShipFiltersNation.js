import React, { Fragment } from "react";
import ShipFiltersNationMap from "./ShipFiltersNationMap";
import { connect } from "react-redux";
import { setNationFilter, setNationFilterVisiblity, clearFilter } from "../redux/actions/filters";
import { CSSTransitionGroup } from "react-transition-group";

const ShipFiltersNation = (props) => {
  const showAndClearFilter = () => {
    props.filters.nation === "" ?
      props.dispatch(setNationFilterVisiblity()) :
      props.dispatch(clearFilter(setNationFilter, setNationFilterVisiblity));
  }
  console.log(props.filters)
  return (
    <section>

      <button
        onClick={() => showAndClearFilter()}
        className={props.filters.nationVisible ? "filter__handler-btn filter__handler-btn--active" : "filter__handler-btn"}
      >
        <span>Nation</span>
        {props.filters.nationVisible ? <span>✖</span> : <span>▼</span>}
      </button>
      
      <CSSTransitionGroup
        transitionName="transitionFilter"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        component={Fragment}
      >
        {props.filters.nationVisible && <ShipFiltersNationMap /> }
      </CSSTransitionGroup>
    </section>
  )
}

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
)

export default connect(mapStateToProps)(ShipFiltersNation);