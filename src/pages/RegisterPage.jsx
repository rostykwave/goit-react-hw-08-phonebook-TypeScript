import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Container } from '@mui/system';
import { RegisterValidationSchema } from 'schema/RegisterValidationSchema';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(authOperations.register(values));
    },
  });

  return (
    <Container
      sx={{
        mt: '1em',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
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
    </Container>
  );
};
export default RegisterPage;
