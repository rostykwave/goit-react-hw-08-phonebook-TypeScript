import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { UserMenu } from 'layout/common/UserMenu';
import { AuthNav } from 'layout/common/AuthNav';

export const HeaderContainer = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, mr: '10px' }}>
          PhoneBook
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
