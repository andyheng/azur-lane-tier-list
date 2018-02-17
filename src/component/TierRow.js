import React from "react";
import Ship from "./Ship";
import idunnolol from "../images/idunnolol.jpg";
import { CSSTransitionGroup } from "react-transition-group";

const TierRow = (props) => (
  <div className="row">
    <h2 className="row__title">{props.rowTitle}</h2>
      <CSSTransitionGroup 
        transitionName="transitionFilter" 
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        component="div" 
        className="row__items"
      >
        {
          // create ship item, sort by rarity, then sort by name
          props.filteredDataByRows.length < 1 ? <img src={idunnolol} /> :
          props.filteredDataByRows
            .map(ship => (<Ship {...ship} key={ship._id} />))
            .sort((a, b) => b.props.rarity.localeCompare(a.props.rarity) || a.props.name.localeCompare(b.props.name))
        }
      </CSSTransitionGroup>
  </div>
)

export default TierRow;