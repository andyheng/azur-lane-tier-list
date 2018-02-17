import React from "react";
import { connect } from "react-redux";
import { setDetailsFilter } from "../redux/actions/filters";

const ShipFiltersDetailsMap = (props) => {
  const detailsAll = ["additionalGun", "torpedo", "barrage", "antiAir", "survival", "recovery", "persistentBuff", "activationBuff", "retrofit", "limited"];
  return (
    <div className="filters__container">
      {
        detailsAll.map(detail => (
          <div key={detail} className="filters__item">
            <button 
              onClick={() => props.dispatch(setDetailsFilter(detail))}
              className={props.filters.detail === detail ? `filters__btn filters__btn--active filters__btn--${detail}` : `filters__btn filters__btn--${detail}`}
            >
              {detail}
              {props.filters.detail === detail && <span className="checkmark">✔</span>}
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