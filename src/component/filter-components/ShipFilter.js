import React, {Fragment} from "react";
import { connect } from "react-redux";
import { clearFilter } from "../redux/actions/filters";
import { CSSTransitionGroup } from "react-transition-group";
import MapFilters from "./MapFilters";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

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

      <SlideDown className={"slidedown"}>
        {props.filters[props.filterVis] && <MapFilters filter={props.filter} arr={props.arr} setFilter={props.setFilter}/>}
      </SlideDown>
    </section>
  )
}

const mapStateToProps = state => ({filters: state.filters})
export default connect(mapStateToProps)(ShipFilter);