import { Alert, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import { Container } from '@mui/system';
import { LoginValidationSchema } from 'schema/LoginValidationSchema';

const LoginPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(authOperations.logIn(values));
    },
  });

  const authError = useSelector(authSelectors.getAuthError);

  return (
    <Container
      sx={{
        mt: '1em',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Log in
        </Button>
      </form>
      {authError === 'Request failed with status code 400' && (
        <Alert variant="outlined" severity="error" sx={{ mt: '20px' }}>
          Login or password is not valid. Try one more time!
        </Alert>
      )}
    </Container>
  );
};
export default LoginPage;
