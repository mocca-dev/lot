import { useDispatch, useSelector } from 'react-redux';

import { hideModal, selecModal } from '../../../reducers/modal/modalSlice';
import Modal from '../Modal';

const ModalWrapper = () => {
  const modal = useSelector(selecModal);
  const dispatch = useDispatch();

  return <Modal config={modal} hide={() => dispatch(hideModal())} />;
};

export default ModalWrapper;
