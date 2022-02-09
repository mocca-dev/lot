import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import FieldText from '../../components/FieldText/FieldText';
import Btn from '../../components/Btn/Btn';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { Form, Formik } from 'formik';
import { setModal } from '../../reducers/modal/modalSlice';
import { set } from '../../reducers/subHeader/subHeaderSlice';
import { hideFixedContent } from '../../reducers/showFlags/showFlagsSlice';
import {
  REQUIRED_ERROR_MSG,
  TOO_LONG_ERROR_MSG,
  TOO_SHORT_ERROR_MSG,
} from '../../constants';

const showConfirmModal = (dispatch, payload, title) => {
  const modalConfig = {
    title,
    show: true,
    type: 'CONFIRM',
    payload,
    action: 'POST_NEW',
  };
  dispatch(setModal(modalConfig));
};

const New = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  let [availabilityList, setAvailabilityList] = useState([]);
  let [typeOfVehicleList, setTypeOfVehicleList] = useState([]);
  let [typeOfCoverageList, setTypeOfCoverageList] = useState([]);

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
    dispatch(set(t('newSubheader')));
    dispatch(hideFixedContent());
  }, [dispatch, t]);

  useEffect(() => {
    setAvailabilityList([
      { label: t('availabilityHourLbl'), value: '0' },
      { label: t('availabilityDayLbl'), value: '1' },
      { label: t('availabilityWeekLbl'), value: '2' },
      { label: t('availability15Lbl'), value: '3' },
      { label: t('availabilityMonthLbl'), value: '4' },
    ]);
    setTypeOfVehicleList([
      { label: t('vehicleMotoLbl'), value: '0' },
      { label: t('vehicleCarLbl'), value: '1' },
      { label: t('vehiclePickupLbl'), value: '2' },
      { label: t('vehicleTrailerLbl'), value: '3' },
      { label: t('vehicleQuadLbl'), value: '4' },
    ]);
    setTypeOfCoverageList([
      { label: t('coverRooflessLbl'), value: '0' },
      { label: t('coverRoofLbl'), value: '1' },
      { label: t('coverCoverLbl'), value: '2' },
    ]);
  }, [i18n, t]);

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
          showConfirmModal(dispatch, values, t('newModalTitle'));
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <FieldText
              placeholder="ej: Cochera en alquiler"
              isGhost={true}
              label={t('titleLabelNew')}
              name="title"
              error={errors.title}
              touched={touched.title}
            />
            <FieldText
              placeholder="ej: Evergreen 742"
              isGhost={true}
              label={t('priceLabelNew')}
              name="price"
              error={errors.price}
              touched={touched.price}
            />
            <FieldText
              placeholder="ej: Evergreen 742"
              isGhost={true}
              label={t('addressLabelNew')}
              name="address"
              error={errors.address}
              touched={touched.address}
            />
            <FieldText
              placeholder="ej: (555) 555-5555"
              isGhost={true}
              label={t('contactLabelNew')}
              name="contact"
              error={errors.contact}
              touched={touched.contact}
            />
            <RadioGroup
              label={t('availabilityLabelNew')}
              list={availabilityList}
              name="availability"
            />
            <RadioGroup
              label={t('typeOfVehiclesLabelNew')}
              list={typeOfVehicleList}
              name="typeOfVehicle"
            />
            <RadioGroup
              label={t('typeOfCoverLabelNew')}
              list={typeOfCoverageList}
              name="typeOfCoverage"
            />
            <FieldText
              placeholder="ej: (555) 555-5555"
              isGhost={true}
              label={t('descriptionLabelNew')}
              type="textarea"
              name="description"
              error={errors.description}
              touched={touched.description}
            />
            <Btn label={t('postBtn')} type="submit" disabled={!isValid} />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default New;
