import React from "react";
import HullIcon from "./HullIcon";
import ShipDetails from "./ShipDetails";

// still need rarity background.
const Ship = ({name, src, hullType, nation, rarity, tier, details}) => (
  <div className="item-container">
    <div>
      <img src={src} />
      <HullIcon hullType={hullType} />
      <ShipDetails details={details} />
    </div>
    <h3>{name}</h3>
  </div>
)

export default Ship;