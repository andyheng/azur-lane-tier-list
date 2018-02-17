import React from "react";
import HullIcon from "./HullIcon";
import ShipDetails from "./ShipDetails";

// still need rarity background.
const Ship = ({name, src, hullType, nation, rarity, tier, details}) => (
  <div className="item">
    <div className={`item__icon item--bg-${rarity}`}>
      <img src={src} className="item__image" />
      <HullIcon hullType={hullType} />
      <ShipDetails details={details} />
    </div>
    <h3 className="item__name">{name}</h3>
  </div>
)

export default Ship;