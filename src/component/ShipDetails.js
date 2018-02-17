import React from "react";

const ShipDetails = (props) => (
  <div className="item__details">
    {
      Object.keys(props.details)
        .filter(key => props.details[key])
        .map(filteredDetail => (
          <div key={filteredDetail} className={`item__detail item__detail--${filteredDetail}`}>
            {filteredDetail.charAt(0).toUpperCase()}
            {filteredDetail.charAt(1)}
          </div>
        ))
    }
  </div>
)

export default ShipDetails;