import React, {Fragment} from "react";
import Ship from "./Ship";

const TierRow = (props) => (
  <Fragment>
    <h2>{props.rowTitle}</h2>
    {
      props.filteredDataByRows.map(ship => (
        <Ship 
          {...ship}
          key={ship._id}
        />
      ))
    }
  </Fragment>
)

export default TierRow;