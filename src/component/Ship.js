import React from "react";
import HullIcon from "./HullIcon";
import ShipDetails from "./ShipDetails";
import ShipModal from "./ShipModal";
import {showModal} from "./redux/actions/modal";
import {connect} from "react-redux";

class Ship extends React.Component {
  render() {
    return (
      <div className="item">
        <div className={`item__icon item--bg-${this.props.rarity}`}>
          <img 
            src={this.props.src} className="item__image"
            onClick={() => this.props.dispatch(showModal(this.props))} 
          />
          <HullIcon hullType={this.props.hullType} />
          <ShipDetails details={this.props.details} />
        </div>
        <h3 className="item__name">{this.props.name}</h3>
      </div>
    )
  }
}

export default connect()(Ship);