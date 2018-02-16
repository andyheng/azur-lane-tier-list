import React from "react";
// Components
import ShipFiltersNation from "./ShipFiltersNation";
import ShipFiltersDetails from "./ShipFiltersDetails";
import ShipFiltersRarity from "./ShipFiltersRarity";

const ShipFilters = () => (
  <section>
    <ShipFiltersNation title={"Nation"} />
    <ShipFiltersDetails title={"Details"} />
    <ShipFiltersRarity title={"Rarity"} />
  </section>
)

export default ShipFilters