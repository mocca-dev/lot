import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import FieldText from '../../components/FieldText/FieldText';
import Btn from '../../components/Btn/Btn';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { Form, Formik } from 'formik';
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

const TOO_SHORT_ERROR_MSG = 'Debe tener al menos 2 letras';
const TOO_LONG_ERROR_MSG = 'Debe tener 50 letras como máximo';
const REQUIRED_ERROR_MSG = 'Este campo es requerido';

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

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, TOO_SHORT_ERROR_MSG)
      .max(50, TOO_LONG_ERROR_MSG)
      .required(REQUIRED_ERROR_MSG),
    price: Yup.string()
      .min(2, TOO_SHORT_ERROR_MSG)
      .max(50, TOO_LONG_ERROR_MSG)
      .required(REQUIRED_ERROR_MSG),
    address: Yup.string()
      .min(2, TOO_SHORT_ERROR_MSG)
      .max(50, TOO_LONG_ERROR_MSG)
      .required(REQUIRED_ERROR_MSG),
    contact: Yup.string()
      .min(2, TOO_SHORT_ERROR_MSG)
      .max(50, TOO_LONG_ERROR_MSG)
      .required(REQUIRED_ERROR_MSG),
    description: Yup.string()
      .min(2, TOO_SHORT_ERROR_MSG)
      .max(50, TOO_LONG_ERROR_MSG)
      .required(REQUIRED_ERROR_MSG),
  });

  useEffect(() => {
    dispatch(set('Nueva publicación'));
    dispatch(hideFixedContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Formik
        initialValues={{
          title: '',
          price: '',
          address: '',
          contact: '',
          availability: '',
          typeOfVehicle: '',
          typeOfCoverage: '',
          description: '',
        }}
        onSubmit={(values) => {
          showConfirmModal(dispatch, values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <FieldText
              placeholder="ej: Cochera en alquiler"
              isGhost={true}
              label="Título"
              name="title"
              error={errors.title}
              touched={touched.title}
            />
            <FieldText
              placeholder="ej: Evergreen 742"
              isGhost={true}
              label="Valor"
              name="price"
              error={errors.price}
              touched={touched.price}
            />
            <FieldText
              placeholder="ej: Evergreen 742"
              isGhost={true}
              label="Ubicación"
              name="address"
              error={errors.address}
              touched={touched.address}
            />
            <FieldText
              placeholder="ej: (555) 555-5555"
              isGhost={true}
              label="Contacto"
              name="contact"
              error={errors.contact}
              touched={touched.contact}
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
              error={errors.description}
              touched={touched.description}
            />
            <Btn label="Publicar cochera" type="submit" disabled={!isValid} />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default New;
