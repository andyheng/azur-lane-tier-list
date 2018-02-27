const modalReducerDefault = {
  isModalOpen: false,
  modalProps: {}
}

const modalReducer = (state = modalReducerDefault, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        isModalOpen: true,
        modalProps: action.modalProps
      }
    case "HIDE_MODAL":
      return modalReducerDefault
    default:
      return state;
  }
}

export default modalReducer;