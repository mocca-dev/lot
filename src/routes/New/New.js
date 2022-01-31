import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FieldText from '../../components/FieldText/FieldText';
import Btn from '../../components/Btn/Btn';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { Form, FormikProvider, useFormik } from 'formik';
import { setModal } from '../../reducers/modal/modalSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';

const availabilityList = [
  { label: 'Hora', value: '0' },
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

const showConfirmModal = (dispatch, payload) => {
  const modalConfig = {
    title: '¿Está seguro que desea publicar?',
    show: true,
    type: 'CONFIRM',
    payload,
    action: 'POST_NEW',
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

const New = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(set('Nueva publicación'));
    dispatch(hideFixedContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      address: '',
      contact: '',
      availability: '',
      typeOfVehicle: '',
      typeOfCoverage: '',
      description: '',
    },
    onSubmit: (values) => {
      showConfirmModal(dispatch, values);
    },
  });

  return (
    <main>
      <FormikProvider value={formik}>
        <Form>
          <FieldText
            placeholder="ej: Cochera en alquiler"
            isGhost={true}
            label="Título"
            name="title"
          />
          <FieldText
            placeholder="ej: Evergreen 742"
            isGhost={true}
            label="Valor"
            name="price"
          />
          <FieldText
            placeholder="ej: Evergreen 742"
            isGhost={true}
            label="Ubicación"
            name="address"
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
