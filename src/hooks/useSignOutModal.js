import { useDispatch } from 'react-redux';
import { setModal } from '../reducers/modal/modalSlice';

const useSignOutModal = () => {
  const dispatch = useDispatch();
  return () => {
    const modalConfig = {
      title: '¿Está seguro que desea cerrar sesión?',
      show: true,
      type: 'CONFIRM',
      action: 'SIGN_OUT',
      url: '',
      btns: {
        left: {
          text: 'Cancelar',
        },
        right: {
          text: 'Aceptar',
        },
      },
    };
    dispatch(setModal(modalConfig));
  };
};

export default useSignOutModal;
