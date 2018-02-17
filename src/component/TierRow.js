import React from "react";
import Ship from "./Ship";

const TierRow = (props) => (
  <div className="row">
    <h2 className="row__title">{props.rowTitle}</h2>
    <div className="row__items">
      {
        // create ship item, sort by rarity, then sort by name
        props.filteredDataByRows
          .map(ship => (<Ship {...ship} key={ship._id} />))
          .sort((a, b) => b.props.rarity.localeCompare(a.props.rarity) || a.props.name.localeCompare(b.props.name))
      }
    </div>
  </div>
)

export default TierRow;