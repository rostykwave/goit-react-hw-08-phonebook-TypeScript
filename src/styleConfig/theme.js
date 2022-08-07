import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#394eff',
    },
  },
  typography: {
    user: {
      color: '#FFFF00',
      fontWeight: 'bold',
    },
    contactName: {
      fontWeight: '500',
      fontSize: '23px',
    },
    contactNumber: {
      fontWeight: 'light',
      fontSize: '20px',
    },
  },
});
