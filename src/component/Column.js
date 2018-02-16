import React, { Fragment } from "react";
import TierRows from "./TierRows";
// redux
import { connect } from "react-redux";
import { shipsFetchData } from "./redux/actions/ships";

class Column extends React.Component {
  componentDidMount() {
    this.props.dispatch(shipsFetchData("http://localhost:3000/api/ships"));
  }
  render() {
    const filterByPosition = this.props.ships.filter(ship => ship.position === this.props.position);
    return (
      <Fragment>
        <h1>{this.props.position}</h1>
        <TierRows filteredData={filterByPosition} />
      </Fragment>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    ships: state.ships
  }
}

export default connect(mapStateToprops)(Column);