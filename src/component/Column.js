import React from "react";
import TierRows from "./TierRows";
// redux
import { connect } from "react-redux";
import { shipsFetchData } from "./redux/actions/ships";
import showFilteredShips from "./redux/selectors/ships";

class Column extends React.Component {
  componentDidMount() {
    this.props.dispatch(shipsFetchData(process.env.API_URL));
  }
  render() {
    const filterByPosition = this.props.ships.filter(ship => ship.position === this.props.position);
    return (
      <section className="column">
        <h2 className="column__title">{this.props.position}</h2>
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