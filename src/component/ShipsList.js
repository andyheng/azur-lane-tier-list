import React, {Fragment} from "react";
import Column from "./Column";

const ShipsList = () => (
  <Fragment>
    <div className="container columns">
      <Column position={"Back"} />
      <Column position={"Front"} />
    </div>
  </Fragment>
)

export default ShipsList;