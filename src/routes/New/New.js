import { useContext, useEffect } from 'react';
import FieldText from '../../components/FieldText/FieldText';
import Btn from '../../components/Btn/Btn';
import Store from '../../store';

const showConfirmModal = (dispatch) => {
  const modalConfig = {
    title: '¿Está seguro que desea publicar?',
    show: true,
    type: undefined,
    url: '',
    btns: {
      left: {
        action: () => dispatch({ type: 'HIDE_MODAL' }),
        text: 'Cancelar',
      },
      right: {
        action: () => {
          // setUser(null);
          // localStorage.setItem('user', null);
          // history.push('/ingreso');
          dispatch({ type: 'HIDE_MODAL' });
        },
        text: 'Aceptar',
      },
    },
  };
  dispatch({ type: 'SET_MODAL', payload: modalConfig });
};

const New = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Nueva publicación' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <FieldText
          placeholder="ej: Evergreen 742"
          isGhost={true}
          label="Ubicación"
        />
        <FieldText
          placeholder="ej: (555) 555-5555"
          isGhost={true}
          label="Contacto"
        />
        <FieldText
          placeholder="ej: (555) 555-5555"
          isGhost={true}
          label="Disponibilidad"
        />
        <FieldText
          placeholder="ej: (555) 555-5555"
          isGhost={true}
          label="Tipo de vehículos"
        />
        <FieldText
          placeholder="ej: (555) 555-5555"
          isGhost={true}
          label="Tipo de cobertura"
        />
        <FieldText
          placeholder="ej: (555) 555-5555"
          isGhost={true}
          label="Descripción"
          type="textarea"
        />
        <Btn
          onClick={() => showConfirmModal(dispatch)}
          label="Publicar cochera"
        />
      </form>
    </main>
  );
};

export default New;
