import React from 'react';
import { useDispatch } from 'react-redux';
import { fecthCounter } from '../../reducers/counter/counterSlice';

const ConfirmModalTemplate = ({
  title,
  btns,
  content,
  hide,
  payload,
  action,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <h4>{title}</h4>
      <div>{content && content()}</div>
      {btns && (
        <footer className={btns.left ? 'two-btns' : ''}>
          {btns.left && (
            <button
              className="secondary-btn"
              onClick={() => {
                hide();
              }}
            >
              {btns.left.text}
            </button>
          )}
          {btns.right && (
            <button
              className={'primary-btn' + (!btns.left ? ' empty-space' : '')}
              onClick={() => {
                switch (action) {
                  case 'POST_NEW':
                    dispatch(fecthCounter(payload));
                    hide();
                    break;
                  case 'SIGN_OUT':
                    console.log('Sign Out');
                    // dispatch(fecthCounter(payload));
                    hide();
                    break;
                  default:
                    break;
                }
              }}
            >
              {btns.right.text}
            </button>
          )}
        </footer>
      )}
    </>
  );
};

export default ConfirmModalTemplate;
