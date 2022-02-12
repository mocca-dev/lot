import React, { useEffect, useRef } from 'react';
import './Modal.css';
import ConfirmModalTemplate from './ConfirmModalTemplate';

const TypeOfModalRender = (config, hide) => {
  switch (config.type) {
    case 'CONFIRM':
      return <ConfirmModalTemplate {...config} hide={hide} />;
    default:
      break;
  }
};

const Modal = ({ config, hide }) => {
  const { show } = config.modal;
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        show &&
        wrapperRef &&
        wrapperRef.current.contains(event.target) &&
        hide
      ) {
        hide();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function cleanup() {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return show ? (
    <span className="modal-wrapper">
      <span ref={wrapperRef} className="modal-backdrop" />
      <div className="modal-container">
        {TypeOfModalRender(config.modal, hide)}
      </div>
    </span>
  ) : (
    <></>
  );
};

export default Modal;
