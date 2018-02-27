import React, { Fragment } from "react";
import { connect } from "react-redux";
import { hideModal } from "./redux/actions/modal";
import { CSSTransitionGroup } from "react-transition-group";
import Modal from "react-modal";
import ShipModalMap from "./ShipModalMap";

const ShipModal = (props) => {
  return (
    <Modal
      isOpen={props.modal.isModalOpen}
      onRequestClose={() => props.dispatch(hideModal())}
      contentLabel="Skills"
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="modal"
    >
      <CSSTransitionGroup
        transitionName="transitionFilter"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
        component={Fragment}
      >
      <button className="modal__btn" onClick={() => props.dispatch(hideModal())}>✖</button>
        {
          props.modal.modalProps.skills ?
            <Fragment>
              <h3 className="modal__title">Displaying skills for <em>{props.modal.modalProps.name}</em></h3>
              <ShipModalMap skills={props.modal.modalProps.skills} />
            </Fragment>
            :
            null
        }
      </CSSTransitionGroup>
    </Modal>
  )
}

const mapStateToProps = (state) => (
  {
    modal: state.modal
  }
)

export default connect(mapStateToProps)(ShipModal);