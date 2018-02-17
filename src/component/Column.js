import React, { Fragment } from "react";
import TierRows from "./TierRows";
// redux
import { connect } from "react-redux";
import { shipsFetchData } from "./redux/actions/ships";
import showFilteredShips from "./redux/selectors/ships";

class Column extends React.Component {
  componentDidMount() {
    this.props.dispatch(shipsFetchData("http://localhost:3000/api/ships"));
  }
  render() {
    const filterByPosition = this.props.ships.filter(ship => ship.position === this.props.position);
    return (
      <section className="content__column">
        <h1>{this.props.position}</h1>
        <TierRows filteredData={filterByPosition} />
      </section>
    )
  }
}

const mapStateToprops = (state) => {
  return {
    ships: showFilteredShips(state.ships, state.filters)
  }
}

export default connect(mapStateToprops)(Column);