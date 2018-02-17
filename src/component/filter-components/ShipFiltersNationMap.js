import React, {Fragment} from "react";
import { connect } from "react-redux";
import { setNationFilter } from "../redux/actions/filters";

const ShipFiltersNationMap = (props) => {
  const nationsAll = ["Sakura Empire", "Eagle Union", "Royal Navy", "MetalBlood", "Eastern Radiance", "North Union"];
  return (
    <div className="filters__container">
      {
        nationsAll.map(nation => (
          <div key={nation} className="filters__item">
            <button 
              onClick={() => props.dispatch(setNationFilter(nation))}
              className={props.filters.nation === nation ? "filters__btn filters__btn--active" : "filters__btn"}
            >
              {nation}
              {props.filters.nation === nation && <span className="checkmark">✔</span>}
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

export default connect(mapStateToProps)(ShipFiltersNationMap)