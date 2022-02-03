import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

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

  useEffect(() => {
    if (userStatus) {
      dispatch(showSpinner());
    } else if (userData) {
      dispatch(hideSpinner());
      dispatch(showFooter());
      dispatch(showHeader());
      navigate(state.location.pathname);
    }
  }, [userStatus, dispatch, state.location, navigate, userData]);

  useEffect(() => {
    dispatch(set(''));
    dispatch(hideFooter());
    dispatch(hideHeader());
    dispatch(hideFixedContent());
  }, [dispatch]);

  const submitHandler = (values) => {
    dispatch(signIn(values));
  };

  return (
    <main className="signin-container">
      <img src="/icons/logo.png" alt="logo" />
      <h2>Bienvenido!</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid }) => (
          <Form>
            <FieldText
              placeholder="Correo electrónico"
              name="email"
              error={errors.email}
              touched={touched.email}
            />
            <FieldText
              placeholder="Contraseña"
              name="password"
              error={errors.password}
              touched={touched.password}
            />
            <Btn label="Enviar" type="submit" disabled={!isValid} />
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default SignIn;
