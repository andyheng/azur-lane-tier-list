import React, { Fragment } from "react";
import Header from "./Header";
import ShipFilters from "./ShipFilters";
import ShipsList from "./ShipsList";

const ALTierApp = () => (
  <Fragment>
    <Header />
    <ShipFilters />
    <ShipsList />
  </Fragment>
)

export default ALTierApp