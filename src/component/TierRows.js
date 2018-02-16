import React from "react";
import TierRow from "./TierRow";

const TierRows = (props) => {
  const rowTiers = ["T0", "T1", "T2", "T3", "T4", "T5"];
  return (
    <div>
      {
        rowTiers.map(tier => (
          <TierRow 
            filteredDataByRows={props.filteredData.filter(ship => ship.tier === tier)}
            key={tier}
            rowTitle={tier}
          />
        ))
      }
    </div>
  )
}

export default TierRows;