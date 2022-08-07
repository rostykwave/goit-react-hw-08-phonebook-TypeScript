import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { Container } from '@mui/system';
import { contactValidationSchema } from 'schema/contactValidationSchema';

export const AddContactForm = ({ onAddContact }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(contactsOperations.addContact(values));
      resetForm();
      onAddContact();
    },
  });

  return (
    <Container sx={{ mt: '1em' }}>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="name"
          name="name"
          label="Name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          variant="standard"
          sx={{ mb: '1.5em' }}
          fullWidth
          id="number"
          name="number"
          label="Number"
          type="text"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Add contact
        </Button>
      </form>
    </Container>
  );
};
