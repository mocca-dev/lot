import { useContext, useEffect } from 'react';
import FieldText from '../../components/FieldText/FieldText';
import Btn from '../../components/Btn/Btn';
import Store from '../../store';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { Form, FormikProvider, useFormik } from 'formik';

const showConfirmModal = (dispatch) => {
  return new Promise((resolve, reject) => {
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
            resolve();
            dispatch({ type: 'HIDE_MODAL' });
          },
          text: 'Aceptar',
        },
      },
    };
    dispatch({ type: 'SET_MODAL', payload: modalConfig });
  });
};

const New = () => {
  const { dispatch } = useContext(Store);
  const availabilityList = [
    { label: 'Hr', value: '0' },
    { label: 'Día', value: '1' },
    { label: 'Semana', value: '2' },
    { label: '15 Días', value: '3' },
    { label: 'Mes', value: '4' },
  ];
  const typeOfVehicleList = [
    { label: 'Moto', value: '0' },
    { label: 'Auto', value: '1' },
    { label: 'Camioneta', value: '2' },
    { label: 'Tariler', value: '3' },
    { label: 'Cautri', value: '4' },
  ];
  const typeOfCoverageList = [
    { label: 'Sin techo', value: '0' },
    { label: 'Con techo', value: '1' },
    { label: 'Cubierta', value: '2' },
  ];

  useEffect(() => {
    dispatch({ type: 'SET_SUB_HEADER', payload: 'Nueva publicación' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      location: '',
      contact: '',
      availability: '',
      typeOfVehicle: '',
      typeOfCoverage: '',
      description: '',
    },
    onSubmit: async (values) => {
      await showConfirmModal(dispatch);
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <main>
      <FormikProvider value={formik}>
        <Form>
          <FieldText
            placeholder="ej: Evergreen 742"
            isGhost={true}
            label="Ubicación"
            name="location"
          />
          <FieldText
            placeholder="ej: (555) 555-5555"
            isGhost={true}
            label="Contacto"
            name="contact"
          />
          <RadioGroup
            label="Disponibilidad"
            list={availabilityList}
            name="availability"
          />
          <RadioGroup
            label="Tipo de vehículos"
            list={typeOfVehicleList}
            name="typeOfVehicle"
          />
          <RadioGroup
            label="Tipo de cobertura"
            list={typeOfCoverageList}
            name="typeOfCoverage"
          />
          <FieldText
            placeholder="ej: (555) 555-5555"
            isGhost={true}
            label="Descripción"
            type="textarea"
            name="description"
          />
          <Btn label="Publicar cochera" type="submit" />
        </Form>
      </FormikProvider>
    </main>
  );
};

export default New;
