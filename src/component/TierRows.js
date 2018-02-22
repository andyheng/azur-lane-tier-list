import React, {Fragment} from "react";
import TierRow from "./TierRow";
import {connect} from "react-redux"
import { CSSTransitionGroup } from "react-transition-group";
import { appArrs } from "./appArrs";

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
    }, 200)
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.filteredData) !== JSON.stringify(this.props.filteredData)) {
      this.handleState()
    }
  }
  
  render() {
    return (
      <div>
        <CSSTransitionGroup
        transitionName="transitionFilter"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        component={Fragment}
      >
        {
          this.state.isLoading ? null :
            appArrs.tiers.map(tier => (
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

export default TierRows;