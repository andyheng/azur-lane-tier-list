import React, {Fragment} from "react";
import TierRow from "./TierRow";
import {connect} from "react-redux"
import { CSSTransitionGroup } from "react-transition-group";

class TierRows extends React.Component {
  state = {
    isLoading: false
  }
  handleState() {
    this.setState(() => ({isLoading: !this.state.isLoading}), this.delayState )
  }
  delayState() {
    setTimeout(() => {
      this.setState(() => ({
        isLoading: false
      }))
    }, 400)
  }
  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.filteredData) !== JSON.stringify(this.props.filteredData)) {
      this.handleState()
    }
  }
  setLoadingClass() {
    let className = "spinner";
    if (this.props.position === "Back") {
      className += " spinner-left"
    } else {
      className += " spinner-right"
    }
    return className;
  }
  
  render() {
    const rowTiers = ["T0", "T1", "T2", "T3", "T4", "T5"];
    return (
      <div>
        <CSSTransitionGroup
        transitionName="transitionFilter"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        component={Fragment}
      >
        {
          this.state.isLoading ? null :
            rowTiers.map(tier => (
              <TierRow 
                filteredDataByRows={this.props.filteredData.filter(ship => ship.tier === tier)}
                key={tier}
                rowTitle={tier}
              />
            ))
        }
        </CSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({filters: state.filters})

export default connect(mapStateToProps)(TierRows);