import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { createNewLot } from '../../reducers/lot/lotSlice';
import { signOut } from '../../reducers/user/userSlice';

const ConfirmModalTemplate = ({ title, content, hide, payload, action }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <h4>{title}</h4>
      <div>{content && content()}</div>
      <footer className="two-btns">
        <button
          className="secondary-btn"
          onClick={() => {
            hide();
          }}
        >
          {t('cancelBtnLbl')}
        </button>
        <button
          className="primary-btn"
          onClick={() => {
            switch (action) {
              case 'POST_NEW':
                dispatch(createNewLot(payload));
                hide();
                navigate('/');
                break;
              case 'SIGN_OUT':
                localStorage.setItem('user', '');
                dispatch(signOut());
                hide();
                break;
              default:
                break;
            }
          }}
        >
          {t('okBtnLbl')}
        </button>
      </footer>
    </>
  );
};

export default ConfirmModalTemplate;
