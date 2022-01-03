import React, { useEffect, useRef } from 'react';
import './Modal.css';
import SimpleModalTemplate from './SimpleModalTemplate';
// import ContactSharedModalTemplate from './ContactSharedModalTemplate/ContactSharedModalTemplate';
// import LocationModalTemplate from './LocationModalTemplate/LocationModalTemplate';

const TypeOfModalRender = (config) => {
  switch (config.type) {
    case undefined:
      return (
        <SimpleModalTemplate
          title={config.title}
          btns={config.btns}
          content={config.content}
        />
      );
    // case 'contact':
    //   return (
    //     <ContactSharedModalTemplate
    //       closeAction={config.btns.left.action}
    //       url={config.url}
    //     />
    //   );
    // case 'location':
    //   return <LocationModalTemplate btns={config.btns} data={config.data} />;
    default:
      break;
  }
};

const Modal = ({ config, hide }) => {
  const { show } = config;
  // , title, btns, url, content
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

  return (
    show && (
      <span className="modal-wrapper">
        <span ref={wrapperRef} className="modal-backdrop" />
        <div className="modal-container">{TypeOfModalRender(config)}</div>
      </span>
    )
  );
};

export default Modal;
