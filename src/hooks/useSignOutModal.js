import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setModal } from '../reducers/modal/modalSlice';

const useSignOutModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return () => {
    const modalConfig = {
      title: t('signOutModalTitle'),
      show: true,
      type: 'CONFIRM',
      action: 'SIGN_OUT',
      url: '',
    };
    dispatch(setModal(modalConfig));
  };
};

export default useSignOutModal;
