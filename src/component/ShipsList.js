import React, { Fragment } from "react";
import Column from "./Column";
import { connect } from "react-redux";

const ShipsList = (props) => {
  return (
    <main className="content">
      {
        props.column.isFrontVisible ?
          <Fragment>
            <Column position={"Front"} />
          </Fragment>
          :
          <Fragment>
            <Column position={"Back"} />
          </Fragment>
      }
    </main>
  )
}

const mapStateToProps = (state) => (
  {
    column: state.column
  }
)

export default connect(mapStateToProps)(ShipsList);