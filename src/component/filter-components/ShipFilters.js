import React from "react";
// Components
import ShipFiltersNation from "./ShipFiltersNation";
import ShipFiltersDetails from "./ShipFiltersDetails";
import ShipFiltersRarity from "./ShipFiltersRarity";

import PerfectScrollbar from 'react-perfect-scrollbar'

const ShipFilters = () => (
  <aside className="filters">
    <PerfectScrollbar>
      <ShipFiltersNation title={"Nation"} />
      <ShipFiltersDetails title={"Details"} />
      <ShipFiltersRarity title={"Rarity"} />
    </PerfectScrollbar>
  </aside>
)

export default ShipFilters