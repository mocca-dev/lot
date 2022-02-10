import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import './SignIn.css';

import {
  hideFixedContent,
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from '../../reducers/showFlags/showFlagsSlice';
import FieldText from '../../components/FieldText/FieldText';
import { Form, Formik } from 'formik';
import Btn from '../../components/Btn/Btn';
import { set } from '../../reducers/subHeader/subHeaderSlice';
import {
  REQUIRED_ERROR_MSG,
  TOO_LONG_ERROR_MSG,
  TOO_SHORT_ERROR_MSG,
} from '../../constants';
import {
  selecUser,
  selecUserStatus,
  signIn,
} from '../../reducers/user/userSlice';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { hideSpinner, showSpinner } from '../../reducers/spinner/spinnerSlice';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, TOO_SHORT_ERROR_MSG)
    .max(50, TOO_LONG_ERROR_MSG)
    .required(REQUIRED_ERROR_MSG),
  password: Yup.string()
    .min(2, TOO_SHORT_ERROR_MSG)
    .max(50, TOO_LONG_ERROR_MSG)
    .required(REQUIRED_ERROR_MSG),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const userStatus = useSelector(selecUserStatus);
  const userData = useSelector(selecUser);
  const { t } = useTranslation();

  useEffect(() => {
    if (userStatus) {
      dispatch(showSpinner());
    } else if (userData) {
      dispatch(hideSpinner());
      dispatch(showFooter());
      dispatch(showHeader());
      navigate(state ? state.location.pathname : '/');
    }
  }, [userStatus, dispatch, state, navigate, userData]);

  useEffect(() => {
    dispatch(set(''));
    dispatch(hideFooter());
    dispatch(hideHeader());
    dispatch(hideFixedContent());
  }, [dispatch]);

  const submitHandler = (values) => {
    localStorage.setItem('user', JSON.stringify(values));
    dispatch(signIn(values));
  };

  return (
    <main className="signin-container">
      <img src="/icons/logo.png" alt="logo" />
      <h2>¡Bienvenido!</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <FieldText
              label="Correo electrónico"
              placeholder="joedoe@gmail.com"
              name="email"
              error={errors.email}
              touched={touched.email}
            />
            <FieldText
              label="Contraseña"
              placeholder="********"
              name="password"
              type="password"
              error={errors.password}
              touched={touched.password}
            />
            <Btn label={t('signInBtn')} type="submit" disabled={!isValid} />
          </Form>
        )}
      </Formik>
      <p>
        Soy nuevo, quiero <Link to="/register">registrarme</Link>.
      </p>
      <p className="tip-container">
        💡 TIP: This app is already in demo mode. If you want to test it, you
        can signin simple with mocked data such as E-Mail: demo@demo.com,
        Password: demo.
      </p>
    </main>
  );
};

export default SignIn;
