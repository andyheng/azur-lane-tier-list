import React from "react";
import { connect } from "react-redux";
import { setDetailsFilter } from "../redux/actions/filters";

const ShipFiltersDetailsMap = (props) => {
  const detailsAll = ["additionalGun", "torpedo", "barrage", "antiAir", "survival", "recovery", "persistentBuff", "activationBuff", "retrofit", "limited"];
  return (
    <div>
      {
        detailsAll.map(detail => (
          <div key={detail}>
            <button onClick={() => props.dispatch(setDetailsFilter(detail))}>
              {detail}
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

export default connect(mapStateToProps)(ShipFiltersDetailsMap)