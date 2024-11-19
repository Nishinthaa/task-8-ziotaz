import React from 'react';

const Modal = ({ modalData, closeModal }) => (
  <div id="modal" className="modal" role="dialog" aria-hidden="false">
    <div className="modal-content" role="document">
      <button className="close-btn" onClick={closeModal} aria-label="Close modal">&times;</button>
      <h2>{modalData.title}</h2>
      <p>{modalData.description}</p>
    </div>
  </div>
);

export default Modal;
