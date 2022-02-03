import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewLot } from '../../reducers/lot/lotSlice';
import { signOut } from '../../reducers/user/userSlice';

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
                    dispatch(createNewLot(payload));
                    hide();
                    break;
                  case 'SIGN_OUT':
                    console.log('Sign Out');
                    dispatch(signOut());
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
