import React from "react";
import { connect } from "react-redux";
import { setNationFilter } from "../redux/actions/filters";

const ShipFiltersNationMap = (props) => {
  const nationsAll = ["Sakura Empire", "Eagle Union", "Royal Navy", "MetalBlood", "Eastern Radiance", "North Union"];
  return (
    <div>
      {
        nationsAll.map(nation => (
          <div key={nation}>
            <button onClick={() => props.dispatch(setNationFilter(nation))}>
              {nation}
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