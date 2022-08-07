import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export const PrivateRoutes = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
