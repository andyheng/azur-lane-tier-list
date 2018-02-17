import React, {Fragment} from "react";
import { connect } from "react-redux";
import { clearFilter } from "../redux/actions/filters";
import { CSSTransitionGroup } from "react-transition-group";
import MapFilters from "./MapFilters";

const ShipFilter = (props) => {
  const showAndClearFilter = () => {
    props.filters[props.filter] === "" ?
      props.dispatch(props.setVis()) :
      props.dispatch(clearFilter(props.setFilter, props.setVis));
  }
  return (
    <section>
      <button
        onClick={() => showAndClearFilter()}
        className={props.filters[props.filterVis] ? "filter__handler-btn filter__handler-btn--active" : "filter__handler-btn"}
      >
        <span>{props.title}</span>
        {props.filters[props.filterVis] ? <span>✖</span> : <span>▼</span> }
      </button>

      <CSSTransitionGroup
        transitionName="transitionFilter"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        component={Fragment}
      >
      {props.filters[props.filterVis] && <MapFilters filter={props.filter} arr={props.arr} setFilter={props.setFilter}/>}
      </CSSTransitionGroup>
    </section>
  )
}

const mapStateToProps = state => ({filters: state.filters})
export default connect(mapStateToProps)(ShipFilter);