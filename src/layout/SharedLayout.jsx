import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderContainer } from 'layout/common/HeaderContainer';
import { Container, Skeleton } from '@mui/material';

const SharedLayout = () => {
  return (
    <>
      <HeaderContainer />

      <Container sx={{ mt: '80px' }}>
        <Suspense
          fallback={
            <Skeleton
              sx={{ height: 128 }}
              animation="wave"
              variant="rectangular"
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
