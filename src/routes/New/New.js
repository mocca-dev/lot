import { useContext, useEffect, useState } from 'react';
import FieldText from '../../components/FieldText/FieldText';
import Btn from '../../components/Btn/Btn';
import Store from '../../store';
import RadioGroup from '../../components/RadioGroup/RadioGroup';

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
  const [availability, setAvailability] = useState('');
  const [typeOfVehicle, setTypeOfVehicle] = useState('');
  const [typeOfCoverage, setTypeOfCoverage] = useState('');
  const availabilityList = [
    { label: 'Hr', value: 0 },
    { label: 'Día', value: 1 },
    { label: 'Semana', value: 2 },
    { label: '15 Días', value: 3 },
    { label: 'Mes', value: 4 },
  ];
  const typeOfVehicleList = [
    { label: 'Moto', value: 0 },
    { label: 'Auto', value: 1 },
    { label: 'Camioneta', value: 2 },
    { label: 'Tariler', value: 3 },
    { label: 'Cautri', value: 4 },
  ];
  const typeOfCoverageList = [
    { label: 'Sin techo', value: 0 },
    { label: 'Con techo', value: 1 },
    { label: 'Cubierta', value: 2 },
  ];

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
        <div>Disponibilidad</div>
        <RadioGroup
          list={availabilityList}
          setSelected={setAvailability}
          selected={availability}
          name="availability"
        />
        <div>Tipo de vehículos</div>
        <RadioGroup
          list={typeOfVehicleList}
          setSelected={setTypeOfVehicle}
          selected={typeOfVehicle}
          name="typeOfVehicles"
        />
        <div>Tipo de cobertura</div>
        <RadioGroup
          list={typeOfCoverageList}
          setSelected={setTypeOfCoverage}
          selected={typeOfCoverage}
          name="typeOfCoverage"
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
