import React from "react";
import { connect } from "react-redux";

const MapFilters = (props) => {
  const generateClassName = (item) => {
    let filtersBtnClassName = `filters__btn`;
    if (props.filter === "detail") {
      filtersBtnClassName += ` filters__btn--${item}`;
    }
    if (props.filter === "rarity") {
      filtersBtnClassName += ` filters__btn--${item}`
    }
    if (props.filters[props.filter] === item) {
      return filtersBtnClassName += " filters__btn--active";
    }
    return filtersBtnClassName
  }
  return (
    <div className="filters__container">
      {
        props.arr.map(item => {
          return (
            <div key={item} className="filters__item">
              <button
                onClick={() => props.dispatch(props.setFilter(item))}
                className={generateClassName(item)}
              >
                {item}
                {props.filters[props.filter] === item && <span className="checkmark">✔</span>}
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(MapFilters)