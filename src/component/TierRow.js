import React, {Fragment} from "react";
import Ship from "./Ship";

const TierRow = (props) => (
  <Fragment>
    <h2>{props.rowTitle}</h2>
    {
      // create ship item, sort by rarity, then sort by name
      props.filteredDataByRows
        .map(ship => (<Ship {...ship} key={ship._id}/>))
        .sort((a, b) => b.props.rarity.localeCompare(a.props.rarity) || a.props.name.localeCompare(b.props.name))
    }
  </Fragment>
)

export default TierRow;