import React from "react";
// Components
import PerfectScrollbar from 'react-perfect-scrollbar'

//
import ShipFilter from "./ShipFilter";
import {appArrs} from "../appArrs";
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
        arr={appArrs.nations}
        setFilter={setNationFilter}
        setVis={setNationFilterVisiblity}
      />
      <ShipFilter
        title={"Details"}
        filter={"detail"}
        filterVis={"detailsVisible"}
        arr={appArrs.details}
        setFilter={setDetailsFilter}
        setVis={setDetailsFilterVisiblity}
      />
      <ShipFilter
        title={"Rarity"}
        filter={"rarity"}
        filterVis={"rarityVisible"}
        arr={appArrs.rarity}
        setFilter={setRarityFilter}
        setVis={setRarityFilterVisibility}
      />
    </PerfectScrollbar>
  </aside>
)

export default ShipFilters