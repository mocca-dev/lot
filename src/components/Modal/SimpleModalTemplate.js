import React from 'react';

const SimpleModalTemplate = ({ title, btns, content, hide }) => (
  <>
    <h4>{title}</h4>
    <div>{content && content()}</div>
    {btns && (
      <footer className={btns.left ? 'two-btns' : ''}>
        {btns.left && (
          <button className="secondary-btn" onClick={() => hide()}>
            {btns.left.text}
          </button>
        )}
        {btns.right && (
          <button
            className={'primary-btn' + (!btns.left ? ' empty-space' : '')}
            onClick={() => hide()}
          >
            {btns.right.text}
          </button>
        )}
      </footer>
    )}
  </>
);

export default SimpleModalTemplate;
