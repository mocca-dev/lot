import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selecUser } from '../../reducers/user/userSlice';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector(selecUser);

  return user ? children : <Navigate to="/signin" state={{ location }} />;
};

export default PrivateRoute;
