import React from "react";
// Components
import PerfectScrollbar from 'react-perfect-scrollbar'

//
import ShipFilter from "./ShipFilter";
import {detailsAll, nationsAll, rarityAll} from "./filterArrs";
import { 
  setNationFilter, 
  setNationFilterVisiblity, 
  setDetailsFilter, 
  setDetailsFilterVisiblity, 
  setRarityFilter,
  setRarityFilterVisibility } from "../redux/actions/filters";

const ShipFilters = () => (
  <aside className="filters">
    <PerfectScrollbar>
      <ShipFilter 
        title={"Nation"}
        filter={"nation"}
        filterVis={"nationVisible"}
        arr={nationsAll}
        setFilter={setNationFilter}
        setVis={setNationFilterVisiblity}
      />
      <ShipFilter
        title={"Details"}
        filter={"detail"}
        filterVis={"detailsVisible"}
        arr={detailsAll}
        setFilter={setDetailsFilter}
        setVis={setDetailsFilterVisiblity}
      />
      <ShipFilter
        title={"Rarity"}
        filter={"rarity"}
        filterVis={"rarityVisible"}
        arr={rarityAll}
        setFilter={setRarityFilter}
        setVis={setRarityFilterVisibility}
      />
    </PerfectScrollbar>
  </aside>
)

export default ShipFilters