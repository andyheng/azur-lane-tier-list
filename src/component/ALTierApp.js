import React, { Fragment } from "react";
import Header from "./Header";
import ShipFilters from "./filter-components/ShipFilters";
import ShipsList from "./ShipsList";

const ALTierApp = () => (
  <Fragment>
    <Header />
    <ShipFilters />
    <ShipsList />
  </Fragment>
)

export default ALTierApp