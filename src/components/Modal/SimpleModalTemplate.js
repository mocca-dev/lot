import React from 'react';

const SimpleModalTemplate = ({ title, btns, content }) => (
  <>
    <h4>{title}</h4>
    <div>{content && content()}</div>
    {btns && (
      <footer className={btns.left ? 'two-btns' : ''}>
        {btns.left && (
          <button className="secondary-btn" onClick={() => btns.left.action()}>
            {btns.left.text}
          </button>
        )}
        {btns.right && (
          <button
            className={'primary-btn' + (!btns.left ? ' empty-space' : '')}
            onClick={() => btns.right.action()}
          >
            {btns.right.text}
          </button>
        )}
      </footer>
    )}
  </>
);

export default SimpleModalTemplate;
