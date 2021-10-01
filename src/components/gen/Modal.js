import React, { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../context";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");

function ModalComponent() {
  const { appState, appDispatch } = useContext(AppContext);

  let subtitle;

  function openModal() {
    appDispatch({
      type: "set_show_modal",
      payload: {
        setShowModal: true,
      },
    });
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    appDispatch({
      type: "set_show_modal",
      payload: {
        setShowModal: false,
      },
    });
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={appState.showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>{appState.modalContent}</div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
