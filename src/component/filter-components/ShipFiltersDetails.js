import React, { Fragment } from "react";
import ShipFiltersDetailsMap from "./ShipFiltersDetailsMap";
import { connect } from "react-redux";
import { setDetailsFilter, setDetailsFilterVisiblity, clearFilter } from "../redux/actions/filters";
import { CSSTransitionGroup } from "react-transition-group";

const ShipFiltersDetails = (props) => {
  const showAndClearFilter = () => {
    props.filters.details === "" ?
      props.dispatch(setDetailsFilterVisiblity()) :
      props.dispatch(clearFilter(setDetailsFilter, setDetailsFilterVisiblity));
  }
  return (
    <section>
      <button
        onClick={() => showAndClearFilter()}
        className={props.filters.detailsVisible ? "filter__handler-btn filter__handler-btn--active" : "filter__handler-btn"}
      >
        <span>Details</span>
        {props.filters.detailsVisible ? <span>✖</span> : <span>▼</span>}
      </button>

      <CSSTransitionGroup
        transitionName="transitionFilter"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        component={Fragment}
      >
        {props.filters.detailsVisible && <ShipFiltersDetailsMap />}
      </CSSTransitionGroup>
    </section>
  )
}

const mapStateToProps = (state) => (
  {
    filters: state.filters
  }
)

export default connect(mapStateToProps)(ShipFiltersDetails)