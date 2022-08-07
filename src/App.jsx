import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from './redux/auth';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from 'layout/SharedLayout';
import { PrivateRoutes } from 'hocs/PrivateRoutes';
import { PublicRoutes } from 'hocs/PublicRoutes';
import { lazy } from 'react';
import { authSelectors } from 'redux/auth';
import { Skeleton } from '@mui/material';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsLoadingStatus);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Skeleton sx={{ height: 64 }} animation="wave" variant="rectangular" />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="contacts" />} />
        <Route element={<PublicRoutes />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
