import React from "react";

const ShipDetails = (props) => (
  <div>
    {
      Object.keys(props.details)
        .filter(key => props.details[key])
        .map(filteredDetail => (
          <div key={filteredDetail}>
            {filteredDetail.charAt(0).toUpperCase()}
            {filteredDetail.charAt(1)}
          </div>
        ))
    }
  </div>
)

export default ShipDetails;