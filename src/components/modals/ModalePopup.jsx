import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // Assurez-vous que votre élément racine est correctement défini

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay z-40  border"
    >
      <div className="modal-content ">
        {children}
        <button onClick={onRequestClose} >
          ✚
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
